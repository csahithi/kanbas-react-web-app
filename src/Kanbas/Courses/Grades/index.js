import { FaCaretDown, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaGear, FaMagnifyingGlass } from "react-icons/fa6";
import "./index.css";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="wd-flex-grow-1">
            <div className="wd-flex-row-container" style={{justifyContent: "flex-end"}}>
                <div className="wd-flex-row-container float-end">
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaFileImport/> Import</button>
                    <button className="btn btn-primary wd-btn-kanbas-primary">
                        <FaFileExport/> Export
                        <FaCaretDown/>
                    </button>
                    <button className="btn btn-primary wd-btn-kanbas-primary"><FaGear/></button>
                </div>
            </div>

            <div className="modules-list">
                <div className="row mb-3">
                            <div className="wd-flex-row-container">
                                <div className="col-sm-6 me-2">
                                    <label className="form-label wd-font-weight-bold">Student Names</label>
                                   
                                    <div className="input-group">
                                        <label className="input-group-text" for=""><FaMagnifyingGlass/></label>
                                        <select className="form-select" aria-label="Filter select">
                                            <option value="" selected disabled hidden><FaMagnifyingGlass/>Search Students</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label wd-font-weight-bold">Assignment Names</label>
                                    
                                    <div className="input-group">
                                        <label className="input-group-text" for=""><FaMagnifyingGlass/></label>
                                        <select className="form-select" aria-label="Filter select">
                                            <option value="" selected disabled hidden><FaMagnifyingGlass/>Search Assignments</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="wd-flex-row-container wd-flex-grow-1 mb-3">
                    <button className="btn btn-primary wd-btn-kanbas-primary" style={{float: "left"}}><FaFilter/> Apply Filters</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered wd-custom-table">
                        <thead>
                            <th style={{verticalAlign: "middle", padding: "8px 8px", borderWidth: 1}}>Student Name</th>
                            {assignments.map((assignment) => (
                            <th style={{borderWidth: 1}}>
                                <div className="grade-table-title">{assignment.title}</div>
                            </th>
                            ))}
                        </thead>
                        <tbody>
                            {enrollments.map((enrollment) => {
                                const user = db.users.find((user) => user._id === enrollment.user);
                                return (
                                    <tr>
                                        <td className="wd-color-link-red">{user.firstName} {user.lastName}</td>
                                        {assignments.map((assignment) => {
                                            const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (<td style={{textAlign: "center"}}>{grade?.grade || ""}</td>);
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}
export default Grades;