import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import "../css/analytics.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Analytics() {
  const [type, setType] = useState("income");
  const dayitem = useSelector((state) => state.totalItem);
  const exbalance = useSelector((state) => state.monthSave).expense;
  const inbalance = useSelector((state) => state.monthSave).income;
  
  const Showitem = (items) => {
    var item = items.items;
    return (
      <div className="item">
        <p>{item.category}</p>
        <p className="price">{item.amount}</p>
        <p className="date">{item.date}</p>
      </div>
    );
  };
  const dataexpense = {
    labels: [
      "Bill",
      "Car",
      "Pet",
      "Travel",
      "Food",
      "Shopping",
      "House",
      "Phone",
      "Other",
    ],
    datasets: [
      {
        label: "Expense",
        data: [
          exbalance[0],
          exbalance[1],
          exbalance[2],
          exbalance[3],
          exbalance[4],
          exbalance[5],
          exbalance[6],
          exbalance[7],
          exbalance[8],
        ],
        borderColor: [
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
        ],
        backgroundColor: [
          "rgb(241, 147, 152)",
          "rgb(162, 234, 234)",
          "#dbf574",
          "rgb(222, 129, 246)",
          "rgb(250, 167, 85)",
          "rgb(110, 250, 113)",
          "rgb(249, 116, 196)",
          "rgb(83, 244, 163)",
          "rgb(166, 178, 245)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const dataincome = {
    labels: [
      "Business",
      "Investments",
      "Rental income",
      "Lottery",
      "Gifts",
      "Salary",
      "Savings",
      "Other",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          inbalance[0],
          inbalance[1],
          inbalance[2],
          inbalance[3],
          inbalance[4],
          inbalance[5],
          inbalance[6],
          inbalance[7],
        ],
        borderColor: [
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
          "rgb(14, 13, 13)",
        ],
        backgroundColor: [
          "rgb(241, 147, 152)",
          "rgb(162, 234, 234)",
          "#dbf574",
          "rgb(222, 129, 246)",
          "rgb(250, 167, 85)",
          "rgb(110, 250, 113)",
          "rgb(249, 116, 196)",
          "rgb(83, 244, 163)",
          "rgb(166, 178, 245)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const [data, setData] = useState(dataincome);
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const btnclick = (e) => {
    if (e == "exc") {
      setData(dataexpense);
      setClick2(true);
      setClick1(false);
      setType("expense");
    } else {
      setType("income");
      setData(dataincome);
      setClick1(true);
      setClick2(false);
    }
  };
  return (
    <div className="componentmain">
      <div className="analmain">
        <div className="pichart">
          <Doughnut data={data} />
        </div>
        <div className="btn">
          <button
            className={`incbtn ${click1 && "active"}`}
            onClick={() => btnclick("inc")}
          >
            Income
          </button>
          <button
            className={`incbtn ${click2 && "active"}`}
            onClick={() => btnclick("exc")}
          >
            Expense
          </button>
        </div>
        <div className="content">
          {dayitem &&
            dayitem.map((elem) => {
              return (
                <>
                  {elem.items.map((item) => {
                    if (item.type === type) {
                      return (
                        <>
                          <Showitem items={item} />
                        </>
                      );
                    }
                  })}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
