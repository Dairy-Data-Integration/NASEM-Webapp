import { FiInfo } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const AnimalDescription = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

	return (
		<div className="animal-input-sidebar-section">
			
			{/* Physiological State */}
			<div className="animal-input-group">
				<label className="flex items-center gap-2 animal-input-label" htmlFor="physiologicalState">
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

				<select name="physiologicalState" id="physiologicalState" value={formData.physiologicalState} onChange={(e) => onInputChange("physiologicalState", e.target.value)} className="animal-input-box">
					<option value="Lactating Cow">Lactating Cow</option>
					<option value="Dry Cow">Dry Cow</option>
				</select>
			</div>

            {/* Breed */}
            <div className="animal-input-group">
				<label htmlFor="breed" className="animal-input-label">Select breed:</label>

				<select value={formData.breed} name="breed" id="breed" onChange={(e) => onInputChange("breed", e.target.value)} className="animal-input-box">
					<option value="Holstein">Holstein</option>
					<option value="Jersey">Jersey</option>
				</select>
			</div>

            {/* Bodyweight */}
            <div className="animal-input-group">
                <label htmlFor="bodyweight" className="animal-input-label">Animal bodyweight (kg):</label>
                <input type="number" name="bodyweight" id="bodyweight" min={0} value={formData.bodyweight} onChange={(e) => onInputChange("bodyweight", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Body Condition */}
            <div className="animal-input-group">
                <label htmlFor="bodyCondition" className="animal-input-label">Animal body condition score (0-5):</label>
                <input type="number" name="bodyCondition" id="bodyCondition" min={0} max={5} value={formData.bodyCondition} onChange={(e) => onInputChange("bodyCondition", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Animal Age */}
            <div className="animal-input-group">
                <label htmlFor="age" className="animal-input-label">Animal age (months):</label>
                <input type="number" name="age" id="age" min={0} value={formData.age} onChange={(e) => onInputChange("age", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Percentage of Cows in First Lactation */}
            <div className="animal-input-group">
                <label htmlFor="firstLactationPercent" className="animal-input-label">Percentage of cows in first lactation:</label>
                <input type="number" name="firstLactationPercent" id="firstLactationPercent" min={0} max={100} value={formData.firstLactationPercent} onChange={(e) => onInputChange("firstLactationPercent", e.target.value)} className="animal-input-box"/>
            </div>


		</div>
	);
};

export default AnimalDescription;
