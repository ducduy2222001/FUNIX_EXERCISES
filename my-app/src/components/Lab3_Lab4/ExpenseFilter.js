import "./ExpenseFilter.css";
export default function ExpenseFilter(props) {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <label className="title">Filter by year</label>
      <select
        className="selectYear"
        value={props.selected}
        onChange={dropDownChangeHandler}
      >
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  );
}
