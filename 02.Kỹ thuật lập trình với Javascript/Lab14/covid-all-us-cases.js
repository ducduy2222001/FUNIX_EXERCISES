/*Trong lab này, bạn sẽ xây dựng hàm ‘plotData’ hiển thị thông tin số ca lây nhiễm của một quốc gia tương ứng. 
Ngoài ra, bạn sẽ được cung cấp một giao diện để có thể hiển thị tổng quát hóa dữ liệu đó lên dưới dạng biểu đồ tương ứng.
1. Nhiệm vụ của bạn:
Với API tương ứng sẽ cung cấp cho bạn thời gian bắt đầu từ ngày 21 tháng 1 năm 2020.
Link API: https://disease.sh/v3/covid-19/nyt/usa */

const response = fetch("https://disease.sh/v3/covid-19/nyt/usa");
response
  .then((res) => {
    return res.json();
  })
  .then((datas) => {
    console.log(datas);
    plotData(datas.filter((a) => a.date <= "2022-02-01"));
    plotData1(
      datas.filter((a) => a.date >= "2022-01-01" && a.date <= "2022-02-06")
    );
    plotData3(
      datas.filter((a) => a.date >= "2022-02-01" && a.date <= "2022-03-20")
    );
  })
  .catch((err) => console.log(err));

function plotData(datas) {
  var keys = datas.map((a) => a.date),
    cases = datas.map((a) => a.cases);
  keys.unshift("dates");
  cases.unshift("cases");
  bb.generate({
    bindto: "#covid-all-us-cases",
    data: {
      x: "dates",
      type: "line",
      columns: [keys, cases],
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          count: 10,
          format: "%Y-%m-%d",
        },
      },
    },
  });
}

// 2.2 Thể hiện biểu đồ dưới dạng dữ liệu chỉ trong 2022:

function plotData1(datas) {
  var keys = datas.map((a) => a.date),
    cases = datas.map((a) => a.cases);
  keys.unshift("dates");
  cases.unshift("cases");
  bb.generate({
    bindto: "#covid-all-us-cases-2022",
    data: {
      x: "dates",
      type: "line",
      columns: [keys, cases],
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          count: 10,
          format: "%Y-%m-%d",
        },
      },
    },
  });
}
// 2.2. Thể hiện dữ liệu với ít chi tiết hơn (loại bỏ phần lớn dữ liệu như giữ lại dữ liệu từ một khoảng thời gian cố định):
function plotData3(datas) {
  var keys = datas.map((a) => a.date);
  cases = datas.map((a) => a.cases);
  keys.unshift("dates");
  cases.unshift("cases");
  bb.generate({
    bindto: "#covid-all-us-cases-weekly",
    data: {
      x: "dates",
      type: "line",
      columns: [keys, cases],
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          count: 10,
          format: "%Y-%m-%d",
        },
      },
    },
  });
}
