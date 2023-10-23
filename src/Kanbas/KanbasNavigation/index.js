import { Link, useLocation } from "react-router-dom";
import "./index.css";
import React from "react";
import { FaBook, FaBullhorn, FaCalendar, FaFilm, FaHistory, FaInbox, FaQuestionCircle, FaTachometerAlt, FaUser } from "react-icons/fa";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons =[FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaHistory, FaFilm, FaBullhorn, FaQuestionCircle]
    const { pathname } = useLocation();
    return (

        <div className="wd-flex-row-container">
        <div className="wd-bg-color-black d-none d-md-block"> 
            <ul className="wd-kanbas-navigation">
                <li style={{padding: 0, margin: 0}}><img src="/images/northeastern.png" width="84px" height="85px"/></li>
                {links.map((link, index) => (
                
                <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`${pathname.includes(link) && "active"}`}>
                <li className={`${pathname.includes(link) && "active" && "wd-active"}`}>
                    <span className={`${link==="Account" ? 'wd-kanbas-nav-account-icon' : 'wd-kanbas-nav-icon'}`}>{React.createElement(icons[index])}</span><br/>
                    {link}
                    </li>
                </Link>
            ))}
            </ul>
        </div>
        </div>
    );
}
export default KanbasNavigation;