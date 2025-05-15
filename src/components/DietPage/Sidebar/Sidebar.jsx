import { useState } from "react";
import { IoClose } from "react-icons/io5";
import MainSidebar from "./MainSidebar";
import AdvancedSidebar from "./AdvancedSidebar";

const Sidebar = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('main');

    return (
        <div className="w-1/4 h-full flex flex-col text-white z-50 shadow-lg">

            {/* Top tab controls and close button */}
            <div className="flex w-full items-center justify-between mt-5 pr-2.5">

                {/* Tab buttons for switching between Main and Advanced inputs */}
                <div className="flex items-center gap-4">
                    <button 
                        className={`sidebar-tab ${activeTab === "main" ? "bg-dark-green" : "bg-dark-green/40 hover:bg-dark-green/60"}`}
                        onClick={() => setActiveTab("main")}>
                            Main
                    </button>
                    <button 
                        className={`sidebar-tab ${activeTab === "advanced" ? "bg-dark-green" : "bg-dark-green/40 hover:bg-dark-green/60"}`}
                        onClick={() => setActiveTab("advanced")}>
                            Advanced
                    </button>
                </div>
                
                {/* Close button */}
                <button onClick={onClose}>
                    <IoClose size={24} className="text-dark-green cursor-pointer"/>
                </button>
            </div>

            {/* Sidebar Body */}
            <div className="bg-dark-green w-full h-full overflow-y-auto">
                {activeTab === "main" ? <MainSidebar /> : <AdvancedSidebar />}
            </div>

        </div>
    )
}

export default Sidebar;