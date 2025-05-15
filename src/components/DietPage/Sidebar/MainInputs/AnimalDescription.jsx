import { FiInfo } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const AnimalDescription = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

	return (
		<div className="flex flex-col w-full px-4 pt-1.5 pb-5 gap-4 bg-bg text-dark-green">
			
			{/* Physiological State */}
			<div className="flex flex-col w-full gap-1 text-sm">
				<label className="flex items-center gap-2 font-medium" htmlFor="physiologicalState">
					Select physiological state:
					
					<Tooltip 
						title="Changing this will automatically update some other inputs. Check all inputs after modifying this."
						placement="top"
						arrow
					>
						<span className="cursor-pointer">
							<FiInfo className="font-bold" />
						</span>
					</Tooltip>
				</label>

				<select name="physiologicalState" id="physiologicalState" value={formData.physiologicalState} onChange={(e) => onInputChange("physiologicalState", e.target.value)} className="border-b-2 border-dark-green focus:outline-none">
					<option value="Lactating Cow">Lactating Cow</option>
					<option value="Dry Cow">Dry Cow</option>
				</select>
			</div>

            {/* Breed */}
            <div className="flex flex-col w-full gap-1 text-sm">
				<label htmlFor="breed" className="font-medium">Select breed:</label>

				<select value={formData.breed} name="breed" id="breed" onChange={(e) => onInputChange("breed", e.target.value)} className="border-b-2 border-dark-green focus:outline-none">
					<option value="Holstein">Holstein</option>
					<option value="Jersey">Jersey</option>
				</select>
			</div>

            {/* Bodyweight */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="bodyweight" className="font-medium">Animal bodyweight (kg):</label>
                <input type="number" name="bodyweight" id="bodyweight" min={0} value={formData.bodyweight} onChange={(e) => onInputChange("bodyweight", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Body Condition */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="bodyCondition" className="font-medium">Animal body condition score (0-5):</label>
                <input type="number" name="bodyCondition" id="bodyCondition" min={0} max={5} value={formData.bodyCondition} onChange={(e) => onInputChange("bodyCondition", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Animal Age */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="age" className="font-medium">Animal age (months):</label>
                <input type="number" name="age" id="age" min={0} value={formData.age} onChange={(e) => onInputChange("age", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Percentage of Cows in First Lactation */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="firstLactationPercent" className="font-medium">Percentage of cows in first lactation:</label>
                <input type="number" name="firstLactationPercent" id="firstLactationPercent" min={0} max={100} value={formData.firstLactationPercent} onChange={(e) => onInputChange("firstLactationPercent", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>


		</div>
	);
};

export default AnimalDescription;
