//--------------Lab 13.1: Tạo Object-------------------
console.log("----------Lab 13.1: Tạo Object-------------");
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ mới sau khi tăng ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Tốc độ mới sau khi giảm ${this.speed}km/h`);
};

console.log("Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h");
const Car1 = new Car("BMW", 120);
Car1.accelerate();
Car1.brake();

console.log("Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h");
const Car2 = new Car("Mercedes", 95);
Car2.accelerate();
Car2.brake();

//--------------Lab 13.2: Sử dụng ES6 Class-------------
console.log("----------Lab 13.2: Sử dụng ES6 Class-------------");
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Tốc độ mới sau khi tăng ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi giảm ${this.speed}km/h`);
  }
}

console.log("Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h");
const CarCl1 = new CarCl("BMW", 120);
Car1.accelerate();
Car1.brake();

console.log(CarCl1.speedUS);
CarCl1.speedUS = 100;
console.log(CarCl1);

console.log("Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h");
const CarCl2 = new CarCl("Mercedes", 95);
CarCl2.accelerate();
CarCl2.brake();
console.log(CarCl2.speedUS);
CarCl1.speedUS = 100;
console.log(CarCl2);

//----------Lab 13.3: Tính kế thừa------------
console.log("----------Lab 13.3: Tính kế thừa------------");
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

//ghi đề phương thức accelerate
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

console.dir(EV);

// 'Tesla' đi với tốc độ 120 km/h, với mức sạc pin là 23%
console.log("'Tesla' đi với tốc độ 120 km/h, với mức sạc pin là 23%");
const EV1 = new EV("Tesla", 120, 23);
EV1.chargeBattery(90);
console.log("Mưc Pin sau khi thay đổi:", `${EV1.charge}%`);
EV1.accelerate();

// ------------Lab 13.4: Tính kế thừa sử dụng ES6---------------
console.log("------------Lab 13.4: Tính kế thừa sử dụng ES6---------------");

class EVCL extends CarCl {
  //private
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  get getCharge() {
    return this.#charge;
  }
}

// Dữ liệu car 1: 'Rivian' đi với tốc độ 120 km/h, với mức sạc pin là 23%
console.log(
  "Dữ liệu car 1: 'Rivian' đi với tốc độ 120 km/h, với mức sạc pin là 23%"
);

const EVCL1 = new EVCL("Rivian", 120, 23);
EVCL1.accelerate(); //ghi đè
EVCL1.brake();
console.log(EVCL1.getCharge);
//khi charge để chê độ private thì nó in ra kết quả undefinded
console.log(EVCL1.charge);
