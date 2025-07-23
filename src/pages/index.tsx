import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/components.css";

const Index = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Index;