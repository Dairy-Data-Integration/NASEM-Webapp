import { Tooltip } from "@mui/material";
import { useAnimalInputsForm } from "../AnimalInputsFormContext"
import { FiInfo } from "react-icons/fi";

const AnimalManagement = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

    return (
        <div className="animal-input-sidebar-section">

            {/* Average Days in Milk */}
            <div className="animal-input-group">
                <label htmlFor="daysInMilk" className="animal-input-label">Average days in milk:</label>
                <input type="number" name="daysInMilk" id="daysInMilk" min={0} value={formData.daysInMilk} onChange={(e) => onInputChange("daysInMilk", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Average Days Pregnant */}
            <div className="animal-input-group">
                <label htmlFor="daysPregnant" className="animal-input-label">Average days pregnant (d):</label>
                <input type="number" name="daysPregnant" id="daysPregnant" min={0} value={formData.daysPregnant} onChange={(e) => onInputChange("daysPregnant", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Target gain in body frame weight */}
            <div className="animal-input-group">
                <label className="flex items-center gap-2 animal-input-label" htmlFor="frameGain">
                    Target gain in body frame weight (kg fresh weight/d):
                                
                    <Tooltip
                        title="Body frame weight refers to the real growth of a younger animal."
                        placement="top"
                        arrow
                    >
                        <span className="cursor-pointer">
                            <FiInfo className="font-bold" />
                        </span>
                    </Tooltip>
                </label>
            
                <input type="number" name="frameGain" id="frameGain" min={0} value={formData.frameGain} onChange={(e) => onInputChange("frameGain", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Target gain/loss of body reserves */}
            <div className="animal-input-group">
                <label className="flex items-center gap-2 animal-input-label" htmlFor="reserveGainLoss">
                    Target gain or loss of body reserves (kg fresh weight/d):
                                
                    <Tooltip
                        title="Body reserves refers to any fluctuations in body weight of a mature animal, e.g. due to lactation."
                        placement="top"
                        arrow
                    >
                        <span className="cursor-pointer">
                            <FiInfo className="font-bold" />
                        </span>
                    </Tooltip>
                </label>
            
                <input type="number" name="reserveGainLoss" id="reserveGainLoss" min={0} value={formData.reserveGainLoss} onChange={(e) => onInputChange("reserveGainLoss", e.target.value)} className="animal-input-box"/>
            </div>

        </div>
    )
}

export default AnimalManagement