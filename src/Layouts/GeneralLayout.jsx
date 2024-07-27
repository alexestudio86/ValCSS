import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function GeneralLayout() {
    return (
        <div className="container">
            <Navbar/>
            <Outlet/>
        </div>
    )
}