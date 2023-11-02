// import {Link} from "react-router-dom";
// import Nav from "../Nav";

import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import KanbasMin from "./KanbasNavigation/indexMin";
import CourseNavMin from "./Courses/CourseNavigation/indexMin";
import db from "./Database";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses,
        { ...course,
        _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation/>
        <div className="wd-flex-grow-1" style={{marginRight: 20}}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard courses={courses}
                                              course={course}
                                              setCourse={setCourse}
                                              addNewCourse={addNewCourse}
                                              deleteCourse={deleteCourse}
                                              updateCourse={updateCourse} />} />
            <Route path="Courses" element={<Navigate to="RS101/Home" />}/>
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="KanbasMin/:courseId" element={<KanbasMin />} />  
            <Route path="CourseNavMin/:courseId" element={<CourseNavMin />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;