import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path = "/" element={} /> */}
                <Route path = "/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}