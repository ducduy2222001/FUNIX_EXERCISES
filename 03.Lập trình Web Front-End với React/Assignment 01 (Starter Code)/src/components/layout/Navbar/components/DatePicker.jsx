import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { styled } from "styled-components";
import { useState } from "react";
import { DateRange } from "react-date-range";

const StyledDateRange = styled.div`
  .input-icon {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input-icon input {
    font-size: 16px;
  }

  .date-picker {
    display: block;
    position: absolute;
    top: 52px;
    left: 0px;
    box-shadow: 0px 3px 5px #ccc;
    z-index: 1000;
  }

  .fade-in {
    animation: fadeIn 0.6s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .date input {
    width: 100px;
  }
`;

export default function DatePicker() {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // sử dụng showModal để ẩn hiện
  const [showModal, setShowModal] = useState(false);

  // hàm xử lí ngày nhập
  const handlerDate = () => {
    let dataDate;
    dates.forEach((item) => {
      var startDate = item.startDate;
      var endDate = item.endDate;

      var startFormattedDate =
        startDate.getMonth() +
        1 +
        "/" +
        startDate.getDate() +
        "/" +
        startDate.getFullYear();
      var endFormattedDate =
        endDate.getMonth() +
        1 +
        "/" +
        endDate.getDate() +
        "/" +
        endDate.getFullYear();
      dataDate = startFormattedDate + " to " + endFormattedDate;
    });
    return dataDate;
  };
  // hàm sử lí ẩn hiện
  const handlerShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledDateRange display={true}>
      <div className="input-icon">
        <i className="fa fa-calendar"></i>
        <input
          type="text"
          placeholder="06/24/2022 to 06/24/2022"
          value={handlerDate()}
          onClick={handlerShowModal}
        />
        {/* nếu showModal bằng true thì show ra  */}
        {showModal && (
          <div className="date-picker fade-in">
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              onChange={(item) => setDates([item.selection])}
              ranges={dates}
              className="date"
            />
          </div>
        )}
      </div>
    </StyledDateRange>
  );
}
