import { FaBook, FaBullhorn, FaCalendar, FaChevronRight, FaFilm, FaHistory, FaInbox, FaQuestionCircle, FaTachometerAlt, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaXmark } from "react-icons/fa6";
function KanbasMin() {
    const { courseId } = useParams();
  return (
    <div className="d-md-none" style={{display: "grid"}}>
        <div style={{float: "right"}}>
            <Link to={`/Kanbas/Courses/${courseId}`} style={{textDecoration: "none"}}>
                <FaXmark className="mt-3 mb-3 me-2" style={{float: "right", color: "black"}}/></Link>
        </div>
        <div>
            <ul className="wd-minimized-kanbas-navigation" style={{listStyle: "none"}}>
                <li>
                    <Link to="/Kanbas/Dashboard">
                        <FaTachometerAlt className="me-2"/>Dashboard</Link></li>
                <li>
                    <Link to="/Kanbas/Profile">
                    <FaUser className="ms-3 me-2" style={{color: "grey"}}/>
                    Account
                    <FaChevronRight className="float-end" style={{color: "black"}}/></Link>
                </li>
                <li>
                    <Link to={`/Kanbas/Courses/${courseId}`}>
                    <FaBook className="ms-3 me-2"/>
                    Courses
                    <FaChevronRight className="float-end" style={{color: "black"}}/></Link>
                </li>
                <li>
                    <Link to="/Kanbas/Calendar">
                    <FaCalendar className="me-2"/>Calendar</Link>
                </li>
                <li>
                    <Link to="/Kanbas/Inbox">
                    <FaInbox className="me-2"/>Inbox</Link>
                </li>
                <li>
                    <Link to="/Kanbas/Studio">
                    <FaFilm className="me-2"/>Studio</Link>
                </li>
                <li>
                    <Link to="/Kanbas/Commons">
                    <FaBullhorn className="me-2"/>Commons</Link>
                </li>
                <li>
                    <Link to="/Kanbas/History">
                    <FaHistory className="ms-3 me-2"/>
                    History
                    <FaChevronRight className="float-end" style={{color: "black"}}/></Link>
                </li>
                <li>
                    <Link to="/Kanbas/Help">
                    <FaQuestionCircle className="ms-3 me-2"/>
                    Help
                    <FaChevronRight className="float-end" style={{color: "black"}}/></Link>
                </li>
            </ul>
        </div>

    </div>
  );
}

export default KanbasMin;