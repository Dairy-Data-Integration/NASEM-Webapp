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
 * - `openSections`: An object tracking which collapsible section is open per tab (e.g., main, advanced).
 *   Stored in `sessionStorage`, so the state is preserved *within* a single browser tab.
 *   Automatically resets when the tab or window is closed.
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

		// Main Tab: Animal Description
		physiologicalState: "Lactating Cow",
		breed: "Holstein",
		bodyweight: 700,
		bodyCondition: 3,
		age: 54,
		firstLactationPercent: 33,

		// Main Tab: Animal Management
		daysInMilk: 100,
		daysPregnant: 46,
		frameGain: 0,
		reserveGainLoss: 0,

		// Main Tab: Milk Production
		milkYield: 35,
		milkFat: 3.8,
		milkProtein: 3.1,
		milkLactose: 4.85,

		// Advanced Tab: Calf
		calfBirthWeight: 44.1,
		starterFeedStartDay: 14,
		nonMilkProteinInLiquidFeed: false,
		rumenDevelopmentDiscount: "none",		// options: "none", "10pctDiscount"

		// Advanced Tab: Environmental & Grazing
		environmentTemperature: 22,
		distanceToParlor: 0,
		dailyParlorTrips: 0,
		dailyElevationChange: 0,

		// Advanced Tab: Equation Selections
		equationMilkProduction: "component",     // options: "trg", "component", "ne", "mp", "min"
		equationMilkProtein: "nrc",              // options: "target", "nrc", "vt1", "vt2"
		equationMilkFat: "predicted",            // options: "trg", "predicted"
		equationMicrobialN: "nrc",               // options: "nrc", "hanigan", "white"
		equationDNDF_IV: "lg",                   // options: "lg", "forage", "all"
		useMonensin: false,                      // boolean

		// Advanced Tab: Other
		matureBodyWeight: 700,
		gestationLength: 280,
		trueProteinRollingAverage: 396,
	};

	// Initialize formData from localStorage (persistent across browser sessions)
	const [formData, setFormData] = useState(() => {
		const storedFormData = localStorage.getItem("animalFormData");
		return storedFormData ? JSON.parse(storedFormData) : defaultFormData;
	});

		// Update localStorage whenever formData changes
	useEffect(() => {
		localStorage.setItem("animalFormData", JSON.stringify(formData));
	}, [formData]);

	// Default open section state per tab
	const defaultOpenSections = {
		main: "",
		advanced: "",
	};

	// Initialize openSections from sessionStorage (resets when tab/window closes)
	const [openSections, setOpenSections] = useState(() => {
		const stored = sessionStorage.getItem("animalOpenSections");
		return stored ? JSON.parse(stored) : defaultOpenSections;
	});

	// Update sessionStorage whenever the current open section changes
	useEffect(() => {
		sessionStorage.setItem("animalOpenSections", JSON.stringify(openSections));
	}, [openSections]);

	// Handler function to update a single field in the form state
	const onInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	// Handler to toggle open section for a given tab
	const toggleOpenSection = (tab, section) => {
		setOpenSections((prev) => ({
			...prev,
			[tab]: prev[tab] === section ? "" : section,
		}));
	};

	// Provide both the form state and sidebar UI state to any component consuming this context
	return (
		<AnimalInputsFormContext.Provider value={{ formData, onInputChange, openSections, toggleOpenSection }}>
			{children}
		</AnimalInputsFormContext.Provider>
	);
};

// Custom hook to access the form context in components
export const useAnimalInputsForm = () => useContext(AnimalInputsFormContext);
