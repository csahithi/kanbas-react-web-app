import { FaBan, FaBars, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaCheckCircle, FaChevronDown, FaCrosshairs, FaFileImport, FaGlasses } from "react-icons/fa";
import ModuleList from "../Modules/ModuleList";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Home() {
return (
    <div>
    <div className="modules-list wd-flex-row-container">
        <ModuleList />
        <div className="d-none d-xl-block ms-4" style={{width: 260}}>
            <div>Course Status</div>
            <div className="mb-2">
                <button className="btn btn-primary wd-btn-kanbas-primary" style={{float: "left"}}><FaBan className="me-2"/>Unpublish</button>
                <button className="btn btn-success wd-btn-kanbas-success" style={{float: "right"}}><FaCheckCircle className="me-2"/>Published</button>
            </div><br/><br/>
            <div>
                <ul className="list-group wd-home-list">
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaFileImport className="me-2"/>
                        Import Existing Content
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaFileImport className="me-2"/>
                        Import from Commons
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaCrosshairs className="me-2"/>
                        Choose Home Page
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaChartBar className="me-2"/>
                        View Course Stream
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaBullhorn className="me-2"/>
                        New Announcement
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaChartBar className="me-2"/>
                        New Analytics
                    </li>
                    <li className="list-group-item wd-home-list-item wd-course-status-button">
                        <FaBell className="me-2"/>
                        View Course Notifications
                    </li>
                </ul>
            </div>
            <div className="wd-font-weight-bold mt-2">To Do</div>
            <hr className="mt-2 mb-2"/>
            <div className="ms-2 me-2">
                <p className="wd-color-text-red mb-0" style={{fontSize: "0.95rem"}}>Grade A1 - HTML
                <FaXmark className="float-end wd-color-black"/></p>
                <p style={{fontSize: "0.8rem", color: "gray"}}>100 points - Sep 18 at 11:59pm</p>
            </div>
            <div className="wd-font-weight-bold mt-2">
                Coming Up
            </div>
            <hr className="mt-2 mb-2"/>                    
            <ul className="ps-1" style={{listStyle: "none"}}>
                <li className="wd-flex-row-container">
                    <div><FaCalendar className="me-3"/></div>
                    <div>
                        <p className="wd-color-text-red mb-0" style={{fontSize: "0.95rem"}}>Lecture</p>
                        <p className="mb-0" style={{fontSize: "0.8rem", color: "gray"}}>CS4550.12631.202410</p>
                        <p style={{fontSize: "0.8rem", color: "gray"}}>Sep 7 at 11:45am</p> 
                    </div>                      
                </li>
                <li className="wd-flex-row-container">
                    <div><FaCalendar className="me-3"/></div>
                    <div>
                        <p className="wd-color-text-red mb-0" style={{fontSize: "0.95rem"}}>Lecture</p>
                        <p className="mb-0" style={{fontSize: "0.8rem", color: "gray"}}>CS4550.12631.202410</p>
                        <p style={{fontSize: "0.8rem", color: "gray"}}>Sep 11 at 11:45am</p> 
                    </div>                      
                </li>
                <li className="wd-flex-row-container">
                    <div><FaCalendar className="me-3"/></div>
                    <div>
                        <p className="wd-color-text-red mb-0" style={{fontSize: "0.95rem"}}>CS5610 06 SP23 Lecture</p>
                        <p className="mb-0" style={{fontSize: "0.8rem", color: "gray"}}>CS4550.12631.202410</p>
                        <p style={{fontSize: "0.8rem", color: "gray"}}>Sep 11 at 6pm</p> 
                    </div>                      
                </li>
            </ul>
        </div>
    </div>
    </div>
);
}
export default Home;