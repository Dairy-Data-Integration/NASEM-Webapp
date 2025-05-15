import { createContext, useContext, useState, useEffect } from "react";

/**
 * AnimalInputsFormContext.jsx
 *
 * This file creates a centralized context for managing the animal input form and UI state
 * (e.g., collapsible section states) in the Diet Page of the NASEM WebApp.
 *
 * Key Features:
 * - `formData`: Stores all user-inputted animal parameters (e.g., body weight, milk yield).
 *   Persisted using `localStorage` so values are preserved even after refreshing
 *   or closing and reopening the browser.
 *
 * - `openSection`: Controls which section of the sidebar is expanded.
 *   Stored in `sessionStorage` so the state is remembered *within* a tab session,
 *   but resets when the user closes the tab or window.
 *
 * This context allows any component in the Diet Page to:
 * - Read or update form inputs via `formData` and `onInputChange`
 * - Track and set which collapsible section is open via `openSection` and `setOpenSection`
 */

// Create a new context to store and manage animal input form data and UI state
const AnimalInputsFormContext = createContext();

// Provider component that wraps parts of the app that need access to the form and sidebar state
export const AnimalInputsFormProvider = ({ children }) => {
	// Default values for form inputs
	const defaultFormData = {
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
	};

	// Initialize formData from localStorage (persistent across browser sessions)
	const [formData, setFormData] = useState(() => {
		const storedFormData = localStorage.getItem("animalFormData");
		return storedFormData ? JSON.parse(storedFormData) : defaultFormData;
	});

	// Initialize openSection from sessionStorage (resets when tab/window closes)
	const [openSection, setOpenSection] = useState(() => {
		return sessionStorage.getItem("animalOpenSection") || "";
	});

	// Update localStorage whenever formData changes
	useEffect(() => {
		localStorage.setItem("animalFormData", JSON.stringify(formData));
	}, [formData]);

	// Update sessionStorage whenever the current open section changes
	useEffect(() => {
		sessionStorage.setItem("animalOpenSection", openSection);
	}, [openSection]);

	// Handler function to update a single field in the form state
	const onInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	// Provide both the form state and sidebar UI state to any component consuming this context
	return (
		<AnimalInputsFormContext.Provider value={{ formData, onInputChange, openSection, setOpenSection }}>
			{children}
		</AnimalInputsFormContext.Provider>
	);
};

// Custom hook to access the form context in components
export const useAnimalInputsForm = () => useContext(AnimalInputsFormContext);
