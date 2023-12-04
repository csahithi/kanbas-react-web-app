import Home from ".//home";
import Signin from "./users/signin";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Nav from "../Nav";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
function Project() {
    return (
        <div>
            <Nav />
            <div className="container-fluid mt-2">
                    <h1>A6</h1>
                    <div className="row">
                    <div className="col-2">
                    <div className="list-group">
                        <Link to="/project/home" className="list-group-item">Home</Link>
                        <Link to="/project/signin" className="list-group-item">Signin</Link>
                        <Link to="/project/signup" className="list-group-item">Signup</Link>
                        <Link to="/project/account" className="list-group-item">Account</Link>
                    </div>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/signin" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/users" element={<UserTable />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Project;