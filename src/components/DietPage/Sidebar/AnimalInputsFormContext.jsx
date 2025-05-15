import { createContext, useContext, useState } from "react";

// Create a new context to store and manage animal input form data
const AnimalInputsFormContext = createContext();

// Provider component that wraps parts of the app that need access to the form state
export const AnimalInputsFormProvider = ({ children }) => {

	// useState to hold all form data fields as a single object
	const [formData, setFormData] = useState({
		// Initial default values for the form inputs
		physiologicalState: "Lactating Cow",
		breed: "Holstein",
		bodyweight: 700,
		bodyCondition: 3,
		age: 54,
		firstLactationPercent: 33,
		daysInMilk: 100,
		daysPregnant: 46,
		frameGain: 0,
		reserveGainLoss: 0,
		milkYield: 35,
		milkFat: 3.8,
		milkProtein: 3.1,
		milkLactose: 4.85,
	});

	const onInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	// Provide the form state and handler function to any component that consumes the context
	return (
		<AnimalInputsFormContext.Provider value={{ formData, onInputChange }}>
			{children}
		</AnimalInputsFormContext.Provider>
	);
};

// Custom hook to use the form context in other components
export const useAnimalInputsForm = () => useContext(AnimalInputsFormContext);
