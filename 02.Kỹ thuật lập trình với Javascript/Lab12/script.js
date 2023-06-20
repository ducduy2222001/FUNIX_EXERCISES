console.log("Lab 12.1: Phân loại thú cưng");
// Tạo hàm 'checkDogs', nhận 2 array tuổi của chó ('dogJulia' và 'dogKate')
function checkDogs(dogJulia, dogKate) {
  //tạo một bản sao array của Julia và xóa tuổi mèo khỏi array đã sao chép đó
  const newDogJulia = dogJulia.slice(1, dogJulia.length - 1);
  // Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate.
  const dogData = [...dogJulia, ...dogKate];

  //check tuổi và log ra screen
  dogData.forEach((ageDog, index) => {
    ageDog > 3
      ? console.log(
          `Dog number ${index} is an adult, and is ${ageDog} years old`
        )
      : console.log(`Dog number ${index} is still a puppy`);
  });
}

// Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
const Julia1 = [3, 5, 2, 12, 7];
const Kate1 = [4, 1, 15, 8, 3];
checkDogs(Julia1, Kate1);

// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];
checkDogs(Julia2, Kate2);

// --------------------------------------------------------
//Cách 1:
console.log("Lab 12.2: Chuyển đổi tuổi thú cưng");

// Tạo hàm 'calcAverageHumanAge', hàm này nhận array tuổi của chó ('age')
function calcAverageHumanAge1(ages) {
  // Tính tuổi của chó theo năm như tuổi người theo công thức
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  // Loại trừ tất cả những chú chó có humanAge dưới 18
  const newHumanAges = humanAges.filter((age) => age >= 18);
  console.log(newHumanAges);

  // Tính humanage trung bình của các chú chó trưởng thành
  return (
    newHumanAges.reduce((prevAge, nextAge) => prevAge + nextAge, 0) /
    newHumanAges.length
  ).toFixed(2);
}

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
console.log("Data 1 => ", calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));

// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
console.log("Data 2 => ", calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));

//---------------------------------------------------------
//Cách 2:
console.log("Lab 12.3: Sử dụng Arrow Function");

function calcAverageHumanAge2(ages) {
  return (
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((prevAge, nextAge) => prevAge + nextAge, 0) /
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18).length
  ).toFixed(2);
}

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
console.log("Data 1 => ", calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
console.log("Data 2 => ", calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
