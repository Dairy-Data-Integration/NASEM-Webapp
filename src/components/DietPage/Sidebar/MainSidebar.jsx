import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import AnimalDescription from "./MainInputs/AnimalDescription";
import AnimalManagement from "./MainInputs/AnimalManagement";
import MilkProduction from "./MainInputs/MilkProduction";
import { useAnimalInputsForm } from "./AnimalInputsFormContext";

const MainSidebar = () => {
	const {openSection, setOpenSection} = useAnimalInputsForm();

	const toggleSection = (section) => {
		setOpenSection((prev) => (prev === section ? null : section));
	};

	// Function to render the arrow icon with rotation based on the open section
	const renderArrow = (section) => (
		<motion.div
			animate={{ rotate: openSection === section ? 180 : 0 }}
			transition={{ duration: 0.25, ease: "easeInOut" }}
		>
			<IoMdArrowDropdown size={20} />
		</motion.div>
	);

	// Function to render the collapsible content and animates its appearance
	const renderCollapsible = (section, Component) => (
		<AnimatePresence initial={false}>
			{openSection === section && (
				<motion.div
					variants={{
						initial: { height: 0, opacity: 0 },
						animate: { height: "auto", opacity: 1 },
						exit: { height: 0, opacity: 0 },
					}}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.25, ease: "easeInOut" }}
					className="overflow-hidden"
				>
					<Component />
				</motion.div>
			)}
		</AnimatePresence>
	);

	return (
		<div className="flex flex-col w-full px-4 py-5 gap-4">
			<h2 className="font-bold text-lg">Main Options</h2>

			{/* Animal Description */}
			<div className="section-style">
				<div onClick={() => toggleSection("description")} className="trigger">
					<p>Animal Description</p>
					{renderArrow("description")}
				</div>
				{renderCollapsible("description", AnimalDescription)}
			</div>

			{/* Animal Management */}
			<div className="section-style">
				<div onClick={() => toggleSection("management")} className="trigger">
					<p>Animal Management</p>
					{renderArrow("management")}
				</div>
				{renderCollapsible("management", AnimalManagement)}
			</div>

			{/* Milk Production */}
			<div className="section-style">
				<div onClick={() => toggleSection("milk")} className="trigger">
					<p>Milk Production</p>
					{renderArrow("milk")}
				</div>
				{renderCollapsible("milk", MilkProduction)}
			</div>
		</div>
	);
};

export default MainSidebar;
