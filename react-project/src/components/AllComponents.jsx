import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Navigation"

function AllComponents() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                {/* <Route index element={<LandingPage />} />
                <Route path="*" element={<NoPage />} /> */}
                <Route index element={"Landing page"} />
                <Route path="*" element={"No page"} />
            </Route>
        </Routes>
    );
}

export default AllComponents;