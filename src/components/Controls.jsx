import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Controls = ({ changeIndex }) => {

    return (
        <AnimatePresence>
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-2/3 w-16 h-16 flex flex-col items-center justify-center border border-white rounded-full cursor-pointer"
                onClick={changeIndex}
            >
                <BsArrowRightShort className="w-8 h-8 text-white" />
            </motion.div>
        </AnimatePresence>
    )
}

export default Controls