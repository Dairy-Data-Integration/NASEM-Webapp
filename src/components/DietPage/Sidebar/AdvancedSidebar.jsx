import { IoMdArrowDropdown } from "react-icons/io";
import { useAnimalInputsForm } from "./AnimalInputsFormContext";
import { AnimatePresence, motion } from "framer-motion";
import CalfSection from "./AdvancedInputs/CalfSection";
import EnvironmentalGrazing from "./AdvancedInputs/EnvironmentalGrazing";
import EquationSelections from "./AdvancedInputs/EquationSelections";
import OtherSection from "./AdvancedInputs/OtherSection";


const AdvancedSidebar = () => {
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
			<h2 className="font-bold text-lg">Advanced Options</h2>

			{/* Calf */}
			<div className="section-style">
				<div onClick={() => toggleSection("calf")} className="trigger">
					<p>Calf</p>
					{renderArrow("calf")}
				</div>
				{renderCollapsible("calf", CalfSection)}
			</div>

			{/* Environmental & Grazing */}
			<div className="section-style">
				<div onClick={() => toggleSection("environmentalGrazing")} className="trigger">
					<p>Environmental & Grazing</p>
					{renderArrow("environmentalGrazing")}
				</div>
				{renderCollapsible("environmentalGrazing", EnvironmentalGrazing)}
			</div>

			{/* Equation Selections */}
			<div className="section-style">
				<div onClick={() => toggleSection("equationSelections")} className="trigger">
					<p>Equation Selections</p>
					{renderArrow("equationSelections")}
				</div>
				{renderCollapsible("equationSelections", EquationSelections)}
			</div>

            {/* Other */}
			<div className="section-style">
				<div onClick={() => toggleSection("other")} className="trigger">
					<p>Other</p>
					{renderArrow("other")}
				</div>
				{renderCollapsible("other", OtherSection)}
			</div>
		</div>
	);
}

export default AdvancedSidebar;