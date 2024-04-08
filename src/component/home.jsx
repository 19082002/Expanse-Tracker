import "../css/home.css";
import { useSelector, useDispatch } from "react-redux";
import { incnum, additem } from "../actions/index";
import {
  Trash2,
  Pencil,
  TrendingUp,
  TrendingDown,
  IndianRupee,
} from "lucide-react";

export default function Home() {
  const total = useSelector((state) => state.totalmoney);
  const balance = useSelector((state) => state.monthSave).save;
  console.log('total',balance)
  const dayitem = useSelector((state) => state.totalItem);

  const Showitem = (items) => {
    var item = items.items;
    console.log("Show", item);
    return (
      <div className="item">
        <p>{item.category}</p>
        <p>{item.amount}</p>
        <p className="expanse">{item.type}</p>
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
                    // console.log(i.id)
                    // var item=items.items.item
                    if (elem.id == "2024-04-08") {
                      return (
                        <>
                          <p>Today</p>
                          {elem.items.map((item) => {
                            console.log("itm", item);
                            return (
                              <>
                                <Showitem items={item} />
                              </>
                            );
                          })}
                        </>
                      );
                    }
                    // if(cnt==1)break;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
