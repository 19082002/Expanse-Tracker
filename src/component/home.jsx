import "../css/home.css";
import { useSelector } from "react-redux";
import {
  Trash2,
  Pencil,
  TrendingUp,
  TrendingDown,
  IndianRupee,
} from "lucide-react";


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Home() {
  const total = useSelector((state) => state.totalmoney);
  const dayitem = useSelector((state) => state.totalItem);
  var count=2; 
  const Showitem = (items) => {
    var item = items.items;
    // console.log("Show", item);
    return (
      <div className="item">
        <p>{item.category}</p>
        <p>{item.amount}</p>
        <p className="expense">{item.type}</p>
        <div className="btn">
          <button>
            <Pencil className="luiicon" />
          </button>
          <button>
            <Trash2 className="luiicon" />
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="componentmain">
        <div className="homemain">
          <div className="container">
            <div className="card">
              <div className="balance">
                <p className="head"> Total Balance </p>
                <p className="blnc">
                  <IndianRupee className="luiicon" />
                  {total.total}
                </p>
              </div>

              <div className="row">
                <div>
                  <p className="head">Income </p>
                  <p className="blnc">
                    {total.income}<TrendingUp className="luiicon" />
                  </p>
                </div>
                <div>
                  <p className="head">Expense </p>
                  <p className="blnc">
                    {total.expense} <TrendingDown className="luiicon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="analyse">
              <div className="head">
                {dayitem &&
                  dayitem.map((elem) => {
                    
                    console.log('cnt',count)
                    // var item=items.items.item
                    var mn=months[(parseInt(elem.id[5])*10 )+parseInt(elem.id[6])-1];
                    var dt=(parseInt(elem.id[8])*10 )+parseInt(elem.id[9]);
                    if (count>0) {
                      count-=1
                      return (
                       
                        <>
                          <p> {dt} {mn}</p>
                          {elem.items.map((item) => {
                            // console.log("itm", item);
                            return (
                              <>
                                <Showitem items={item} />
                              </>
                            );
                          })}
                        </>
                      );
                     
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
