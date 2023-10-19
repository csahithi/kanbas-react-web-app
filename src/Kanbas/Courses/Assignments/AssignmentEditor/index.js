import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="wd-flex-grow-1">
            <br/>
            <div style={{display: "flex", justifyContent: "end"}}>
                <div className="wd-flex-row-container float-end" style={{alignItems: "center"}}>
                    <FaCheckCircle className="me-1 wd-color-green"></FaCheckCircle>
                    <div className="wd-color-green">Published</div>
                    <button className="btn btn-primary wd-btn-kanbas-primary ms-3"><FaEllipsisV/></button>
                </div>
            </div>
            
            <hr/>

            <div className="modules-list">
                <label for="assignment-name" className="form-label">Assignment Name</label>
                <input type="text" className="form-control mb-4" id="assignment-name" value={assignment.title}/>  
                <textarea className="form-control mb-4" rows="4">This is the assignment description.</textarea>
                <div className="row mb-4">
                    <label for="assignment-points" className="col-sm-3 col-form-label"><div className="float-end">Points</div></label>
                    <div className="col-sm-5">
                    <input id="assignment-points" className="form-control" type="text" value="100"/>
                    </div>
                </div>
                <div className="row mb-4">
                    <label for="assignment-group" className="col-sm-3 col-form-label"><div className="float-end">Assignment Group</div></label>
                    <div className="col-sm-5">
                        <select className="form-select" id="assignment-group">
                            <option selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-4">
                    <label for="display-grade-as" className="col-sm-3 col-form-label"><div className="float-end">Display Grade as</div></label>
                    <div className="col-sm-5">
                        <select className="form-select" id="display-grade-as">
                            <option selected>Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-sm-5 offset-sm-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="count-assignment"/>
                            <label className="form-check-label" for="count-assignment">Do not count this assignment towards the final grade</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <label for="submission-type" class="col-sm-3 col-form-label"><div className="float-end">Submission Type</div></label>
                    <div className="col-sm-5 pt-3 assignment-edit-group">
                        <select className="form-select mb-4" id="submission-type">
                            <option selected>Online</option>
                        </select>
                        <fieldset className="row">
                            <legend className="col-form-label pt-0 mb-3 wd-font-weight-bold">
                            Online Entry Options</legend>
                            <div className="col-sm-10">
                            <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="chkbox-textentry" name="check-online-entry-options" value = "TEXT ENTRY" checked/>
                            <label className="form-check-label" for="chkbox-textentry">Text Entry</label><br/>
                            </div>
                            <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="chkbox-websiteurl" name="check-online-entry-options" value = "WEBSITE URL" checked/>
                            <label className="form-check-label" for="chkbox-websiteurl">Website URL</label><br/>
                            </div>
                            <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="chkbox-mediarecordings" name="check-online-entry-options" value = "MEDIA RECORDINGS" checked/>
                            <label className="form-check-label" for="chkbox-mediarecordings">Media Recordings</label><br/>
                            </div>
                            <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="chkbox-studentannotation" name="check-online-entry-options" value = "STUDENT ANNOTATION"/>
                            <label className="form-check-label" for="chkbox-studentannotation">Student Annotation</label><br/>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="chkbox-fileuploads" name="check-online-entry-options" value = "FILE UPLOADS"/>
                            <label className="form-check-label" for="chkbox-fileuploads">File Uploads</label><br/><br/>
                            </div>
                            </div>
                            </fieldset>
                    </div>
                </div>
                <div className="row mb-4">
                    <label className="col-sm-3 col-form-label"><div className="float-end">Assign</div></label>
                    <div className="col-sm-5 pt-3 assignment-edit-group pe-0 ps-0">
                        <div className="ps-3 pe-3 mb-4">
                            <label for="assign-to" className="form-label wd-font-weight-bold">
                                Assign To
                            </label>
                            <input id="assign-to" className="form-control mb-3" type="text" value="Everyone"/>
                            <label className="form-label wd-font-weight-bold" for="assignment-due">
                                Due
                            </label>
                            <input id="assignment-due" className="form-control mb-3" type="date" value="2023-09-18"/>

                            <div className="wd-flex-row-container">
                                <div className="col-sm-6 me-2">
                                    <label className="form-label wd-font-weight-bold" for="assignment-available-from">Available from</label>
                                    <input id="assignment-available-from" className="form-control" type="date" value="2023-09-06"/>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label wd-font-weight-bold" for="assignment-until">Until</label>
                                    <input id="assignment-until" className="form-control" type="date"/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary wd-btn-kanbas-primary col-sm-12 assignment-edit-add-button">
                            <FaPlus className="wd-font-weight-normal"/> Add</button>
                    </div>
                </div>
                <hr/>
                <div className="wd-flex-row-container" style={{justifyContent: "space-between"}}>
                    <div className="form-check ms-3">
                        <input className="form-check-input" type="checkbox" id="count-assignment"/>
                        <label className="form-check-label" for="count-assignment">Do not count this assignment towards the final grade</label>
                    </div>
                    <div className="wd-flex-row-container float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-primary wd-btn-kanbas-primary">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger wd-btn-kanbas-danger">
                        Save
                    </button>
                        {/* <a href="/kanbas/assignments/index.html"><button className="btn btn-primary wd-btn-kanbas-primary">Cancel</button></a>
                        <a href="/kanbas/assignments/index.html"><button className="btn btn-danger wd-btn-kanbas-danger">Save</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AssignmentEditor;