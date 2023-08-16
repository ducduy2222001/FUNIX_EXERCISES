-----KIẾN THỨC REACTJS-----

# 1. JSX là 1 cú pháp mở rộng cho JavaScript, là kết hợp của JavaScript và XML. Nó chuyển đổi cứ pháp dạng gần như XML về thành JavaScript, giữa chúng ta có thể code ReactJs bằng cú pháp của XML thay vì phải dùng JavaScript.

# 2. Component là nơi render ra các mã html thuần, 1 điều quan trọng khác đó là nó cho phép ta chia nhỏ đoạn code của UI thành những phần độc lập với nhau, với mục đích để tiện cho việc quản lí và tái sử dụng.

# 3. State được dùng để biểu diễn trạng của Component. Tức là giá trị của State có thể thay đổi được, trái ngược hoàn toán với Props là 1 giá trị bất biến

# 4. Ghi nhớ useEffect()

useEffect(() => {
// Mã thực thi sau khi component được render và sau mỗi lần re-render
// Các side effect được xử lý ở đây
return () => {
// Mã thực thi khi component bị hủy (clean-up code)
// Đây là nơi hủy các tác vụ, giúp tránh memory leak và lỗi trong quá trình hủy
};
}, [dependencyArray]);

==> PHẦN CHUNG:
+Callback luôn được gọi sau khi component mounted
+Cleanup function luôn được gọi trước khi component unmount
+Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

# a, useEffect(callback)

-Goị callback mỗi khi component re-render
-Gọi callback sau khi component thêm element vào DOM (tức là element được thêm vào DOM trước, sau đó thì callback mới được gọi nha)

# b, useEffect(callback,[])

- Chỉ gọi callback 1 lần sau khi component mounted

# c, useEffect(callback,[deps])

- Callback sẽ được gọi lại mỗi khi deps thay đổi

# 5. useRef()

- Lưu trữ 1 tham chiếu và ghi nhớ nó
- Truy suất tới các thành phần DOM (các thẻ input, h1,....)
  (\*)VD:
  const inputRef = useRef()
  <input ref={inputRef}/>
- Nó là 1 function và trả về object có thuộc tính current
- Giá trị của nó luôn luôn được lưu lại khi component được re-render
- Việc thay đổi giá trị của 1 tham chiếu trong current, nó sẽ không gây ra việc re-render lại của component

# 6. useContext()

- Giúp truyền dữ liệu chừ component cha sang con mà không cần dùng props

(\*) Createcontext: tạo ra phạm vi để truyền dữ liệu đến component con
VD: import { createContext} from "react";

(\*) Provider: Nhận dữ liệu con
VD: const ThemeContext = createContext();
=> Sau khi tạo muốn nó nhận dữ liệu thì phải bọc nó thì các phần tử con nó mới nhận data từ thèn chính(cha) được

const value ={
a=1,
b=[1,2,3,4]
}
<ThemeContext.Provider value={value}> {children} <ThemeContext.Provider/>
==> Cái value có thể là gì trị bất kì

(\*) Consumer: Lấy và nhận được dữ liệu
VD: import { useContext } from "react";
const context = useContext(ThemeContext);
=> Trong cái context này nó chứa giá trị của thèn chính(cha) nha
==> Khi muốn lấy giá trị value thì chỉ cần
console.log(context.a) // 1

# 7. React.memo()

- memo là một higher order component, được sử dụng để bọc các component. Bằng việc sử dụng React.memo(), nó dùng để tránh việc render lại component
  VD: export default memo(App)
- Khi giá trị trong memo thay đổi thì nó sẽ được re-render nha

# 8. useCallback()

- Nó giống với useMemo(có [dependence])
- tối ưu quá trình render của React functional components. Nó sẽ rất hữu ích đối với trường hợp một thành phần (component) liên tục được hiển thị lại không cần thiết trong quá trình xử lý sự kiện người dùng và có hành vi chức năng phức tạp.

VD: useCallback(()=>{},[])

# 9. useMemo()

- Tránh thực hiện lại 1 logic nào đó không cần thiết. Kiểu k bị re-render lại cái logic như là tính toán gì đó

VD: useMemo(()=>{},[])

# 10. useReducer()

- Cho phép quản lý state của ứng dụng một cách linh hoạt và hiệu quả hơn.
- Nó giúp giảm thiểu sự phức tạp khi quản lý state
- À có cái là nó giống y như Redux nha

(\*) Sử dụng reducer function để xác định các action (trước đây ta dùng switch case).

VD: const initialState = [];
function reducer(state,action){
switch(action.type){}
return newState;
}
export default () => {
const[state,dispatch]=useReducer(reducer,initialState);
return(<div>{JSON.stringify(state)}</div>)
};
==> Chú ý rằng dispatch không có argument nào mà chỉ đơn giản là một object{type:'x'}
==> Thông tin về type có thể được lưu trong reducer
==> Đối với việc khởi tạo state thì ta có thể sử dụng useState()
==> Còn cho việc update state thì ta có thể sử dụng useEffect()
==> Lợi ích của hook này là nó giúp bạn nhận ra các component bất đồng bộ với redux.

# 11. forwardRef()

- Cho phép các components cha truyền các refs (tham chiếu) xuống các component con của chúng
