import "../css/add.css";
import {useDispatch } from "react-redux";
import { incnum, additem, decnum, incr, decr } from "../actions/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let expensetype = [
  "Bill",
  "Car",
  "Pet",
  "Travel",
  "Food",
  "Shopping",
  "House",
  "Phone",
  "Other",
];
let incometype = [
  "Business",
  "Investments",
  "Rental income",
  "Lottery",
  "Gifts",
  "Salary",
  "Savings",
  "Other",
];
export default function Add() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const goto = () => {
    const type = document.getElementById("type").value;
    const catg = document.getElementById("cat").value;
    const amnt = document.getElementById("amnt").value;
    const date = document.getElementById("date").value;

    if (
      type.length == 0 ||
      date.length == 0 ||
      catg.length == 0 ||
      amnt.length == 0
    )
      alert("Please enter valid value");
    else {
      setFlag(false);
      // console.log("type",date)
      const month = date[5] + date[6];
      // console.log("type",month)
      if (type == "expense") {
        dispatch(decnum(parseInt(amnt)));
        dispatch(decr(parseInt(amnt), parseInt(month), parseInt(catg)));
        dispatch(
          additem({
            type: type,
            date: date,
            amount: parseInt(amnt),
            category: expensetype[parseInt(catg)],
            catgval: parseInt(catg),
          })
        );
      } else {
        dispatch(incr(parseInt(amnt), parseInt(month), parseInt(catg)));
        dispatch(incnum(parseInt(amnt)));
        dispatch(
          additem({
            type: type,
            date: date,
            amount: parseInt(amnt),
            category: incometype[parseInt(catg)],
            catgval: parseInt(catg),
          })
        );
      }
    }
  };
  const [data, setData] = useState(expensetype);
  const btnclick = () => {
    const type = document.getElementById("type").value;
    if (type == "income") setData(incometype);
    else setData(expensetype);
  };
  useEffect(() => {
    console.log(flag);
  });
  return (
    <div className="componentmain">
      {/* welcome to the add */}
      <div className="addmain">
        <div className="form">
          <h1>Add new list</h1>
          {/* <form onSubmit={(ev) => ev.target.reset()}> */}
          <div className="row1">
            <div className="type">
              <label htmlFor="type">Type </label>
              <select name="type" id="type" onChange={() => btnclick()}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="catg">
              <label htmlFor="category">Category</label>
              <select name="category" id="cat">
                <option value="0">{data[0]}</option>
                <option value="1">{data[1]}</option>
                <option value="2">{data[2]}</option>
                <option value="3">{data[3]}</option>
                <option value="4">{data[4]}</option>
                <option value="5">{data[5]}</option>
                <option value="6">{data[6]}</option>
                <option value="7">{data[7]}</option>
                <option value="8">{data[8]}</option>
              </select>
            </div>
          </div>
          <div className="row2">
            <div className="date">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
            </div>
            <div className="amnt">
              <label htmlFor="amount">Amount</label>
              <input type="number" required id="amnt" />
            </div>
          </div>
          <div className="footer">
            <Link to="/">
              <button
                onClick={() => {
                  goto();
                }}
                className="btn"
              >
                Submit
              </button>
            </Link>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
