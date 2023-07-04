import { Route, Routes } from "react-router-dom";
import { Navbar, Social, Footer } from "./components";
import { Home, Bio } from "./pages";

const App = () => {

    return (
        <div className="bg-[#1D1D1D]">
            <Social />
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/biography" element={<Bio />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
