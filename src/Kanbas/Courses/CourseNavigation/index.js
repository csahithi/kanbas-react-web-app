import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="d-none d-md-block">
            <ul className="wd-course-navigation">
            {links.map((link, index) => (
                <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`${pathname.includes(link) && "active"}`}>
                <li className={`${pathname.includes(link) && "active" && "wd-active"}`}><span>{link}</span></li>
                </Link>
            ))}
            </ul>
        </div>
    );
}
export default CourseNavigation;