import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="wd-flex-grow-1">

            <div className="wd-flex-row-container" style={{justifyContent: "end"}}>
                <div className="wd-flex-row-container float-end">
                    <button className="btn btn-primary wd-btn-kanbas-primary">Collapse All</button>
                    <button className="btn btn-primary wd-btn-kanbas-primary">View Progress</button>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle course-publish-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaCheckCircle className="wd-color-green"/> Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-danger wd-btn-kanbas-danger"><FaPlus/> Module</button>
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaEllipsisV/></button>
                </div>
            </div>
            
            <hr/>

            <ul className="list-group wd-home-list">
            <li className="list-group-item">
                <div className="wd-flex-row-container">
                    <div className="col-sm-3 me-3 mb-2">
                        <input className="form-control" value={module.name}
                        onChange={(e) => dispatch(setModule({
                        ...module, name: e.target.value }))} />
                    </div>
                    <button className="btn btn-success wd-btn-kanbas-success" style={{height:"fit-content"}} onClick={() => { dispatch(addModule({ ...module, course: courseId })) }}>Add</button>
                    <button className="btn btn-danger wd-btn-kanbas-danger" style={{height:"fit-content"}} onClick={() => { dispatch(updateModule(module)) }}>Update</button>
                </div>
                <div className="col-sm-3">
                    <textarea className="form-control me-2" value={module.description}
                    onChange={(e) => dispatch(setModule({
                    ...module, description: e.target.value }))} /><br/>
                </div>
            </li>
                {
                    modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div>
                    <li className="list-group-item list-group-item-secondary" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div className="flex">
                                <FaGripVertical className="me-2"/>
                                <FaCaretDown className="me-3"/>
                                {module.name}                             
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                            <button className="btn btn-success wd-btn-kanbas-success" onClick={() => dispatch(setModule(module)) }>Edit</button>
                                <button className="btn btn-danger wd-btn-kanbas-danger" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                                <FaCheckCircle className="ms-2 me-1 wd-color-green"/>
                                <FaCaretDown className="me-3"/>
                                <FaPlus className="me-3"/>
                                <FaEllipsisV/>
                            </div>
                    </li>
                    <li className="list-group-item wd-home-list-item">
                            <i class="fas fa-grip-vertical me-3"></i>
                            <div className="wd-flex-grow-1">
                                {module.description}
                            </div>
                            <div className="float-end me-2">
                                <FaCheckCircle className="me-3 wd-color-green"/>
                                <FaEllipsisV/>
                            </div>
                        </li>

                    </div>
                    
                    ))
                }
            </ul>
                </div>
    );
}
export default ModuleList;