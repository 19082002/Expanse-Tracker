import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector} from "react-redux";
import "../css/analytics.css";
ChartJS.register(ArcElement, Tooltip, Legend);



export default function Analytics() {
  const exbalance = (useSelector((state) => state.monthSave)).expense;
    console.log('expense',exbalance)
    const inbalance = (useSelector((state) => state.monthSave)).income;
    console.log('expense',exbalance)
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
        data: [exbalance[0], exbalance[1], exbalance[2],exbalance[3], exbalance[4],exbalance[5], exbalance[6], exbalance[7], exbalance[8]],
        backgroundColor: [
          "rgb(241, 147, 152)",
          "rgb(162, 234, 234)",
          "#dbf574",
          "rgb(222, 129, 246)",
          "rgb(250, 167, 85)",
          "rgb(110, 250, 113)",
          "rgb(166, 12, 166)",
          "rgb(25, 159, 64)",
          "rgb(100, 23, 24)",
        ],
        borderColor: [
          // 'rgba(255, 99, 255)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
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
        data: [inbalance[0], inbalance[1], inbalance[2],inbalance[3], inbalance[4],inbalance[5], inbalance[6], inbalance[7]],
        backgroundColor: [
          "rgb(241, 147, 152)",
          "rgb(162, 234, 234)",
          "#dbf574",
          "rgb(222, 129, 246)",
          "rgb(250, 167, 85)",
          "rgb(110, 250, 113)",
          "rgb(166, 12, 166)",
          "rgba(25, 159, 64, 1)",
          "rgb(100, 23, 24)",
        ],
        borderColor: [
          // 'rgba(255, 99, 255)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 2,
      },
    ],
  };
  
  const [data,setData]=useState(dataincome);
  const [click1,setClick1]=useState(true);
  const [click2,setClick2]=useState(false);
  const btnclick=(e)=>{
    if(e=="exc"){
      setData(dataexpense);
      setClick2(true);
      setClick1(false);
    }
   
  else {
    setData(dataincome)
  setClick1(true);
  setClick2(false);
  }
  }
  return (
    <div className="componentmain">
      <div className="analmain">
      <div className="pichart">
        <Pie data={data} />
        </div>
        {/* <Pie data={dataexpense} /> */}
        <div className="btn">
        <button className={`incbtn ${click1 && 'active'}`} onClick={()=>btnclick("inc")}>Income</button>
        <button  className={`incbtn ${click2 && 'active'}`} onClick={()=>btnclick("exc")}>Expense</button>
        </div>
        </div>
      
    </div>
  );
}
