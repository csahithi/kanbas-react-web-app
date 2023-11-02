// import db from "../../Kanbas/Database";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars, FaChevronDown, FaGlasses } from "react-icons/fa";
import "../../Kanbas/index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Courses({ courses }) {
    let courseIdToUse;
    const { courseId } = useParams();
    const {pathname} = useLocation();  
    if (courseId){
        courseIdToUse = courseId;
    } 
    else{
        courseIdToUse = "RS101";
    }
    // const courseIdToUse = courseId || "RS101";
    const course = courses.find((course) => course._id === courseIdToUse);
    const startIndex = pathname.indexOf(courseIdToUse) + courseIdToUse.length;
    const breadcrumbPath = pathname.slice(startIndex);
    const breadcrumbItems = breadcrumbPath.split('/').filter(item => item !== '');  

    const breadcrumbStyle = {
        //'--bs-breadcrumb-divider': '/',
        'paddingLeft': 30
    };
    return (
        <div className="wd-flex-grow-1" style={{marginRight: 20}}>
            <div className="navbar wd-kanbas-top-bar">
                <div className="d-none d-md-block">
                <div style={{display: "flex"}}>
                    <FaBars className="fa-2x" style={{paddingLeft: 2}}/>
                <nav style={breadcrumbStyle} aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{whiteSpace: "nowrap", margin: 0}}>
                        { course === undefined ? (<></>) : 
                        <li className="breadcrumb-item"><p className="breadcrumb-home-text">{course.number}.{course._id}</p></li>}
                        {/* <li className="breadcrumb-item active" aria-current="page"><p className="breadcrumb-home-text" style={{color: "black"}}>Home</p></li> */}
                        {breadcrumbItems.map((item, index) => (
                            <li key={index} className="breadcrumb-item active me-2">
                            {index === breadcrumbItems.length - 1 ? (
                                item
                            ) : (
                                <p className="breadcrumb-home-text" style={{color: "black"}}>{item}</p>
                                // <a href={`/Kanbas/Courses/${courseId}/${breadcrumbItems.slice(0, index + 1).join('/')}`}>
                                // {item}
                                // </a>
                            )}
                            </li>
                        ))}
                    </ol>
                </nav>
                </div>
                </div>
                <button className="btn btn-primary wd-btn-kanbas-primary d-none d-md-block">
                    <FaGlasses className="fa-solid me-2"/>Student View</button>

                
            </div>

            <div className="wd-bg-color-black d-flex d-md-none wd-color-white align-items-center p-2">
                <Link to={`/Kanbas/KanbasMin/${courseId}`} style={{textDecoration: "none"}}>
                    <FaBars className="wd-color-white m-3"/>
                </Link>
                <div className="wd-flex-grow-1 text-center">
                { course === undefined ? (<></>) : 
                    <div>{course.number}.{course._id}</div> }
                    <div>{breadcrumbItems[0]}</div>
                </div>
                <div className="float-end">
                    <FaGlasses className="mt-3 mb-3 ms-3 me-2"/>
                    <Link to={`/Kanbas/CourseNavMin/${courseId}`} style={{textDecoration: "none"}}>
                    <FaChevronDown className="wd-color-white mt-3 mb-3 me-3"/>
                </Link>
                </div>
            </div>
            
            <hr className="d-none d-md-block" style={{marginLeft: 20}}/>
            <div className="wd-flex-row-container wd-flex-grow-1">
            <CourseNavigation />
            <div className="wd-flex-grow-1">
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                        path="Assignments/:assignmentId"
                        element={<AssignmentEditor/>}
                        />                       
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Courses;