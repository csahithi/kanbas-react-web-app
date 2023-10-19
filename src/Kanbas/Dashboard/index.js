import { Link } from "react-router-dom";
import db from "../Database";
import "../styles.css";
import "../index.css"
import "./index.css"
import { FaEllipsisV, FaPenSquare } from "react-icons/fa";
function Dashboard() {
    return (
        <div>
            <div className="wd-flex-grow-1" style={{marginRight: 20}}>
        <div className="wd-dashboard-div ms-4 pe-5" >         
            <h2 className="wd-dashboard-title">Dashboard</h2>
            <hr/>
            <div className="wd-dashboard-courses ms-3">
            <h4 className="wd-published-course-title">Published Courses ({db.courses.length})</h4>
            <hr/>
        

        <div className="wd-flex-row-container wd-flex-grow-1">
        <div className="wd-flex-grow-1">
            <div className="container">
                <div className="d-flex flex-row flex-wrap">

                    
                        {db.courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                            <div className="wd-dashboard-course-card mb-4">
                                <div className="card wd-dashboard-card">
                                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                                        <FaEllipsisV className="wd-large-text" style={{color: "#fff"}}/>
                                    </div>
                                    <div className="card-header" style={{backgroundColor: "#315e8e", height: 144}}>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="wd-card-title text-truncate">{course.number} {course.name}</h6>
                                        <h5 className="wd-card-subtitle text-truncate">{course.number}.{course._id}</h5>
                                        <p className="wd-card-text text-truncate">202410_2 Fall 2023 Semester Full Term Grad</p>
                                        <FaPenSquare style={{color: "#677179", fontWeight: "normal", marginLeft: 5}}/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        ))}         
                </div>
            </div>

        </div>
        </div>
        </div>
    </div>   
    
    </div>
        </div>
    );
}
export default Dashboard;