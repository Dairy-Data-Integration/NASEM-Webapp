import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Sidebar from "./Sidebar/Sidebar";
import { AnimatePresence, motion } from "framer-motion";


const DietPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="w-full h-full overflow-hidden">

            {/* Edit Inputs Buton */}
            <button className="edit-inputs-btn text-dark-green" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                Edit Inputs
                <HiOutlinePencilSquare size={18}/>
            </button>

            {/* Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                        <motion.div
                            className="h-full"
                            initial={{ x: "-50%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.8 }}
                        >
                            <Sidebar onClose={() => setIsSidebarOpen(!isSidebarOpen)} />
                        </motion.div>
                    )}
            </AnimatePresence>
        </div>
    )
}

export default DietPage;
