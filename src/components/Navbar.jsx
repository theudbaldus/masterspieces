import { useState } from "react";
import { motion } from "framer-motion";

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    },
    hidden: {
        opacity: 0
    }
};

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-screen px-8 lg:px-16 py-4 md:py-8 backdrop-blur z-50">
            <div className="relative flex items-center justify-between text-white">
                <a href="/">
                    <h1 className="text-xs md:text-base uppercase font-bold">{`Master's Pieces`}</h1>
                </a>

                <div onClick={() => setToggleMenu((prevToggle) => !prevToggle)} className="lg:hidden space-y-1 cursor-pointer z-50">
                    <motion.span animate={{ rotateZ: toggleMenu ? 45 : 0, y: toggleMenu ? 6 : 0, width: toggleMenu ? 20 : 24 }} className="block h-0.5 w-6 bg-white"></motion.span>
                    <motion.span animate={{ width: toggleMenu ? 0 : 20 }} className="block h-0.5 w-5 bg-white"></motion.span>
                    <motion.span animate={{ rotateZ: toggleMenu ? -45 : 0, y: toggleMenu ? -6 : 0, width: toggleMenu ? 20 : 16 }} className="block h-0.5 w-4 bg-white"></motion.span>
                </div>

                <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-8 items-center">
                    <a href="/" className={`${window.location.pathname === "/" ? "text-white" : "text-gray-500"} text-base`}>Home</a>

                    <a href="/biography" className={`${window.location.pathname === "/biography" ? "text-white" : "text-gray-500"} text-base`}>Biography</a>
                </ul>

                {toggleMenu ? (
                    <motion.div className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-[#1D1D1D] z-40" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 25 }}>
                        <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-16 items-center">
                            <motion.a
                                href="/"
                                variants={itemMotion}
                                className={`${window.location.pathname === "/" ? "text-white" : "text-gray-500"} text-base`}
                            >
                                Home
                            </motion.a>

                            <motion.a
                                href="/biography"
                                variants={itemMotion}
                                className={`${window.location.pathname === "/biography" ? "text-white" : "text-gray-500"} text-base`}
                            >
                                Biography
                            </motion.a>
                        </motion.div>
                    </motion.div>
                ) : null}
            </div >
        </nav>
    );
};

export default Navbar;