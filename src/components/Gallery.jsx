import { useState } from "react";
import { works } from "../constants/works";
import { AnimatePresence, motion } from "framer-motion";
import Controls from "./Controls";

const Gallery = () => {
    const [index, setIndex] = useState(0);

    const changeIndex = () => {
        if (index === 4) {
            setIndex(0)
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className="relative grow w-full flex flex-col items-center justify-center z-10">
            <AnimatePresence mode="wait">
                <motion.img
                    key={works[index].path}
                    src={works[index].path}
                    className="h-[70vh] w-full object-contain"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    key={works[index].name}
                    className="absolute top-[64px] left-[32px] md:left-1/4 text-4xl font-bold text-white [text-shadow:_0_2px_5px_rgb(0_0_0_/_100%)]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                >
                    {works[index].name}
                </motion.h1>

                <motion.span
                    key={works[index].date}
                    className="absolute bottom-[256px] left-[32px] md:left-1/4 text-2xl text-white [text-shadow:_2px_2px_5px_rgb(0_0_0_/_100%)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                >
                    {works[index].date}
                </motion.span>

                <motion.p
                    key={works[index].location}
                    className="absolute bottom-[86px] right-[32px] md:right-1/4 text-xl text-white [text-shadow:_2px_2px_5px_rgb(0_0_0_/_100%)]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    {works[index].location}
                </motion.p>
            </AnimatePresence>

            <Controls changeIndex={changeIndex} />
        </div>
    );
};

export default Gallery;