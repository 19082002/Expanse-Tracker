import { Link } from "react-router-dom"
import "../css/navbar.css"
import { Home, LineChart, PieChart,CircleUser,CirclePlus,LogOut} from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <nav className="main">
        <div className="icon">
        <span>
      {/* <img src="./images/icn.png" alt="icon" /> */}
      expanse</span>
      </div>
      <div className="profile">
                <img src="./images/kids.jpeg" alt="user photo" className="userphoto"/>
                <p className="username">Hey ssd</p>
            </div>
        <div className="container">
           
            <div className="routelink">
            <Link to="/" className="link"><Home className="luiicon"/><span className="spanname">Home</span></Link>
            <Link to="/stats" className="link"><LineChart className="luiicon"/><span className="spanname">Stats</span></Link>
            <Link to="/add" className="btmadd link"><CirclePlus className="luiicon"/></Link>
            <Link to="/analytics" className="link"><PieChart className="luiicon"/><span className="spanname">Analytics</span></Link>
            <Link to="/" className="link"><CircleUser className="luiicon"/><span className="spanname">Account</span></Link>
            </div>
           
        </div>
        <div className="foot">
            <Link to="/add" className="add link"><CirclePlus className="luiicon"/><span className="spanname">Add New</span></Link>
            <Link to="/" className="acnt link"><LogOut className="luiicon"/><span className="spanname">log out</span></Link>
        </div>
      </nav>
    </>
  )
}
