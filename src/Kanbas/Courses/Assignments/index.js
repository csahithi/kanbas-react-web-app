import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCaretDown, FaCheckCircle, FaGripVertical, FaPlus } from "react-icons/fa";
import { FaEllipsisVertical, FaPenToSquare } from "react-icons/fa6";
import "./index.css";
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
    return (
        <div className="wd-flex-grow-1">
            <br/>
            <div className="wd-flex-row-container" style={{justifyContent: "space-between"}}>
                <input type="text" className="form-control w-25" placeholder="Search for Assignments"/>
                <div className="wd-flex-row-container float-end">
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaPlus/> Group</button>
                    <button className="btn btn-danger wd-btn-kanbas-danger"><FaPlus/> Assignment</button>
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaEllipsisVertical/></button>
                </div>
            </div>
            <hr/>
            {/* <h2>Assignments for course {courseId}</h2> */}
            <div className="modules-list">
                <ul className="list-group wd-assignment-list">
                    <li className="list-group-item list-group-item-secondary"  style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="flex">
                            <FaGripVertical className="me-3"/>
                            <FaCaretDown className="me-3"/>
                            Assignments
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div className="rounded-pill me-3 ps-2 pe-2 wd-assignment-rounded-pill">40% of Total</div>
                            <FaPlus className="me-3"/>
                            <FaEllipsisVertical/>
                        </div>
                    </li>
                    {courseAssignments.map((assignment) => (
                    <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        <li className="list-group-item wd-assignment-list-item">
                            <FaGripVertical/>
                            <FaPenToSquare className="wd-color-green wd-font-weight-normal ms-4 me-4"/>
                            <div className="wd-flex-grow-1">
                                <div className="wd-assignment-title">{assignment.title}</div>
                                <div className="wd-assignment-subtitle">{assignment.course}</div>
                                <div className="wd-assignment-subtitle wd-flex-row-container">
                                    <div className="wd-font-weight-bold me-1">Due</div> {assignment.due} | 100 pts
                                </div>
                            </div>
                            <div className="me-2">
                                <FaCheckCircle className="me-3 wd-color-green"/>
                                <FaEllipsisVertical/>
                            </div>
                        </li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Assignments;