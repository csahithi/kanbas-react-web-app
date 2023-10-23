import React from "react";
import db from "../../../Kanbas/Database";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"
import { FaBook, FaBullhorn, FaBullseye, FaCircle, FaClipboardList, FaComment, FaFolder, FaPlug, FaRocket, FaSitemap, FaGlasses, FaBars } from "react-icons/fa";
import { FaFileLines, FaFilePen, FaGear, FaHouse, FaUserGroup, FaXmark } from "react-icons/fa6";

function CourseNavMin() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
    const icons = [FaHouse, FaSitemap, FaPlug, FaPlug, FaFilePen, FaRocket, FaBook, FaUserGroup, FaPlug, FaComment, FaBullhorn, FaFileLines, FaFolder, FaClipboardList, FaBullseye, FaCircle, FaFileLines, FaGear];
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    return (
    <div>
        <div className="wd-bg-color-black d-flex d-md-none wd-color-white align-items-center p-2">
        <Link to={`/Kanbas/KanbasMin/${courseId}`} style={{textDecoration: "none"}}>
                    <FaBars className="wd-color-white m-3"/>
                </Link>
        <div class="wd-flex-grow-1 text-center">
            <div>{course.number}.{course._id}</div>
            <div>Home</div>
        </div>
        <div className="float-end">
                    <FaGlasses className="mt-3 mb-3 ms-3 me-2"/>
                    <Link to={`/Kanbas/Courses/${courseId}`} style={{textDecoration: "none"}}>
                <FaXmark className="wd-color-white mt-3 mt-3 mb-3 me-2"/></Link>
                </div>
    </div>
    <div className="d-md-none">
        <ul className="wd-minimized-course-navigation" style={{listStyle: "none"}}>
            {links.map((link, index) => (
                    <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`${pathname.includes(link) && "active"}`}>
                    <li className={`${pathname.includes(link) && "active"}`}>
                        <span>{React.createElement(icons[index])}</span>
                        <span>{link}</span></li>
                    </Link>
                ))}
        </ul>
    </div>
    </div>
    );
}

export default CourseNavMin;