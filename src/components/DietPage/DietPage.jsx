import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Sidebar from "./Sidebar/Sidebar";


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
            {isSidebarOpen && (
                <Sidebar onClose={() => setIsSidebarOpen(!isSidebarOpen)} />
            )}

        </div>
    )
}

export default DietPage;
