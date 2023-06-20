'use strict';
/*a. Tạo một phương thức cho object poll có tên 'registerNewAnswer'. 
Phương thức này thực hiện 2 công việc như sau:

Hiển thị cửa sổ prompt để người dùng nhập số của đáp án đã chọn. 
Prompt sẽ có dạng như sau:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
Bạn có thể sử dụng Template String để tạo chuỗi sử dụng các dữ liệu của Object poll bên trên, 
để xuống dòng thì bạn có thể sử dụng ký tự \n trong chuỗi.
Dựa trên số người dùng nhập vào, hãy cập nhật thuộc tính array 
numberOfVotes của poll (thuộc tính thể hiện số lượt votes cho 
mỗi lựa chọn). Ví dụ: nếu câu trả lời là 3, hãy tăng giá trị ở vị trí 3 của array lên 1.
*/

/*b. Tạo một phương thức 'displayResults' để hiển thị kết quả cuộc khảo sát. 
Phương thức này nhận một chuỗi (String) làm đầu vào (được gọi là 'type'), 
biến type sẽ chỉ có các giá trị là  'string' hoặc 'array'. 

Nếu biến type có giá trị là  'array', bạn cần hiển thị array kết 
quả như nó vốn có, bằng cách sử dụng console.log ().
Đây sẽ là tùy chọn mặc định. */

const ansPollEl = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer() {
    let ans = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n\n(Write option number)`
      )
    );
    //check người nhập có hợp lệ hay không
    while (!isFinite(ans) || ans < 0 || ans > 3) {
      alert('Vui lòng chọn 1 giá trị số nguyên nằm trong khoảng 0 và 3');
      ans = Number(
        prompt(
          `${this.question}\n${this.options.join(
            '\n'
          )}\n\n(Write option number)`
        )
      );
    }
    this.numberOfVotes[ans]++;
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.numberOfVotes.join(',')}`);
    } else if (type === 'array') {
      console.log(this.numberOfVotes);
    }
  },
};

ansPollEl.addEventListener('click', function () {
  poll.registerNewAnswer.call(poll);
  poll.displayResults.call(poll);
});

const ans1 = {
  numberOfVotes: [4, 1, 2],
};

const ans2 = {
  numberOfVotes: [11, 34, 31, 3, 5, 6, 7, 8],
};

poll.displayResults.call(ans2, 'array');
poll.displayResults.call(ans1, 'string');
poll.displayResults.call(ans2, 'string');
