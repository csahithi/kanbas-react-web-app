import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCaretDown, FaCheckCircle, FaGripVertical, FaPlus } from "react-icons/fa";
import { FaEllipsisVertical, FaPenToSquare } from "react-icons/fa6";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment, resetAssignment } from "./assignmentsReducer";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    }; 
    const handleClose = () => {
      setOpen(false);
    }; 
    const [clickId, setClickId] = useState(0);
    // const courseAssignments = assignments.filter(
    // (assignment) => assignment.course === courseId);
    return (
        <div className="wd-flex-grow-1">
            <br/>
            <div className="wd-flex-row-container" style={{justifyContent: "space-between"}}>
                <input type="text" className="form-control w-25" placeholder="Search for Assignments"/>
                <div className="wd-flex-row-container float-end">
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaPlus/> Group</button>
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/Create`}>
                    <button className="btn btn-danger wd-btn-kanbas-danger" onClick={() => dispatch(resetAssignment(assignment))}><FaPlus/> Assignment</button></Link>
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
                    {assignments
                    .filter((assignment) => assignment.course === courseId)
                    .map((assignment) => (                 
                        <li className="list-group-item wd-assignment-list-item">
                            <FaGripVertical/>
                            <FaPenToSquare className="wd-color-green wd-font-weight-normal ms-4 me-4"/>                            
                            <div className="wd-flex-grow-1">
                                <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                onClick={() => { dispatch(selectAssignment(assignment)) }}>
                                    <div className="wd-assignment-title">{assignment.title}</div>
                                    <div className="wd-assignment-subtitle">{assignment.course}</div>
                                    <div className="wd-assignment-subtitle wd-flex-row-container">
                                        <div className="wd-font-weight-bold me-1">Due</div> {assignment.due} | {assignment.points} pts
                                    </div>
                                </Link>
                            </div>                           
                            <div className="me-2">
                                <button className="btn btn-danger wd-btn-kanbas-danger me-3" style={{float: "left"}} onClick={() => {
                                    handleClickOpen()
                                    setClickId(assignment._id)
                                }}>Delete</button>
                                <FaCheckCircle className="me-3 wd-color-green"/>
                                <FaEllipsisVertical/>

                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description">
                                    <DialogTitle id="alert-dialog-title">
                                    {"Confirm Delete Assignment"}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to delete the assignment?
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}><span className="wd-color-text-red wd-font-weight-bold">No</span></Button>
                                    <Button onClick={() => {
                                        handleClose()
                                        dispatch(deleteAssignment(clickId))}} autoFocus>
                                        <span className="wd-color-text-red wd-font-weight-bold">Yes</span>
                                    </Button>
                                    </DialogActions>
                                </Dialog>

                            </div>
                        </li>
                    
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Assignments;