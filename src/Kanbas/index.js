// import {Link} from "react-router-dom";
// import Nav from "../Nav";

import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import KanbasMin from "./KanbasNavigation/indexMin";
import CourseNavMin from "./Courses/CourseNavigation/indexMin";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation/>
      <div className="wd-flex-grow-1" style={{marginRight: 20}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="KanbasMin/:courseId" element={<KanbasMin />} />  
          <Route path="CourseNavMin/:courseId" element={<CourseNavMin />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;