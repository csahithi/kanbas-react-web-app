import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "../styles.css";
import "../index.css"
import "./index.css"
import { FaEdit, FaEllipsisV, FaPenSquare, FaPlus, FaTrash } from "react-icons/fa";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {
    return (
        <div>
            <div className="wd-flex-grow-1" style={{marginRight: 20}}>
        <div className="wd-dashboard-div ms-4 pe-5" >         
            <h2 className="wd-dashboard-title">Dashboard</h2>
            <hr/>
            <div className="wd-dashboard-courses ms-3">
            <h4 className="wd-published-course-title">Published Courses ({courses.length})</h4>
            <hr/>
            <div className="col-md-3">
                <h5>Course</h5>
                <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input value={course.number} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input value={course.startDate} className="form-control mb-2" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input value={course.endDate} className="form-control mb-2" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                
            </div>
            <div className="mt-4 mb-4">
                <button className="btn btn-danger wd-btn-dashboard-danger" onClick={addNewCourse} >
                    <FaPlus/> Add
                </button>
                <button className="btn btn-primary wd-btn-dashboard-primary" onClick={() => updateCourse(course)} >
                    Update
                </button>
            </div>
        
        <div className="mt-4">
        <div className="wd-flex-row-container wd-flex-grow-1 mt-4">
        <div className="wd-flex-grow-1">
            <div className="container ms-1">
                <div className="d-flex flex-row flex-wrap">

                    
                        {courses.map((course) => (
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
                                        {/* <FaPenSquare style={{color: "#677179", fontWeight: "normal", marginLeft: 5}}/> */}
                                        <button className="btn btn-primary wd-btn-dashboard-primary"
                                            onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                            }}>
                                                <FaEdit className="me-1"/>
                                                Edit
                                        </button>
                                        <button className="btn btn-danger wd-btn-dashboard-danger"
                                            onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                            }}>
                                                <FaTrash className="me-2"/>
                                                Delete
                                        </button>
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
        </div>
    );
}
export default Dashboard;