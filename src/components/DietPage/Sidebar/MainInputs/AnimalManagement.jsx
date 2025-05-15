import { Tooltip } from "@mui/material";
import { useAnimalInputsForm } from "../AnimalInputsFormContext"
import { FiInfo } from "react-icons/fi";

const AnimalManagement = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

    return (
        <div className="flex flex-col w-full px-4 pt-1.5 pb-5 gap-4 bg-bg text-dark-green">

            {/* Average Days in Milk */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="daysInMilk" className="font-medium">Average days in milk:</label>
                <input type="number" name="daysInMilk" id="daysInMilk" min={0} value={formData.daysInMilk} onChange={(e) => onInputChange("daysInMilk", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Average Days Pregnant */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label htmlFor="daysPregnant" className="font-medium">Average days pregnant (d):</label>
                <input type="number" name="daysPregnant" id="daysPregnant" min={0} value={formData.daysPregnant} onChange={(e) => onInputChange("daysPregnant", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Target gain in body frame weight */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label className="flex items-center gap-2 font-medium" htmlFor="frameGain">
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
            
                <input type="number" name="frameGain" id="frameGain" min={0} value={formData.frameGain} onChange={(e) => onInputChange("frameGain", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

            {/* Target gain/loss of body reserves */}
            <div className="flex flex-col w-full gap-1 text-sm">
                <label className="flex items-center gap-2 font-medium" htmlFor="reserveGainLoss">
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
            
                <input type="number" name="reserveGainLoss" id="reserveGainLoss" min={0} value={formData.reserveGainLoss} onChange={(e) => onInputChange("reserveGainLoss", e.target.value)} className="border-b-2 border-dark-green focus:outline-none"/>
            </div>

        </div>
    )
}

export default AnimalManagement