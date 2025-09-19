import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";
const Index = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <Footer2 />
        </div>
    )
}
export default Index;