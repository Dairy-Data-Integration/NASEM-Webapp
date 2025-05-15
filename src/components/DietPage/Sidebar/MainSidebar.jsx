import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import AnimalDescription from "./MainInputs/AnimalDescription";
import MilkProduction from "./MainInputs/MilkProduction";
import AnimalManagement from "./MainInputs/AnimalManagement";

const MainSidebar = () => {
	const [openSection, setOpenSection] = useState("");

	const toggleSection = (section) => {
		setOpenSection((prev) => (prev === section ? null : section));
	};

	return (
		<div className="flex flex-col w-full px-4 py-5 gap-4">
			<h2 className="font-bold text-lg">Main Options</h2>

			{/* Animal Description */}
			<div className="section-style">
				<div onClick={() => toggleSection("description")} className="trigger">
					{openSection === "description" ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />}
					<p>Animal Description</p>
				</div>
				{openSection === "description" && (<AnimalDescription />)}
			</div>

			{/* Animal Management */}
			<div className="section-style">
				<div onClick={() => toggleSection("management")} className="trigger">
					{openSection === "management" ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />}
					<p>Animal Management</p>
				</div>
				{openSection === "management" && (<AnimalManagement />)}
			</div>

			{/* Milk Production */}
			<div className="section-style">
				<div onClick={() => toggleSection("milk")} className="trigger">
					{openSection === "milk" ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />}
					<p>Milk Production</p>
				</div>
				{openSection === "milk" && (<MilkProduction />)}
			</div>
		</div>
	);
};

export default MainSidebar;
