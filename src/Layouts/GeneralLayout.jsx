import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import '../css/val.min.css';


export function GeneralLayout({children}) {
    return (
        <div className='light-gray vh-100 vw-100' id='tem00' >
            <div className='container'>
                <Header/>
                {
                    children
                    ??
                    <Outlet/>
                }
            </div>
        </div>
    )
}