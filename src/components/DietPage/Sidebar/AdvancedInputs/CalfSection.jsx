import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const CalfSection = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

    return (
        <div className="animal-input-sidebar-section">

            {/* Calf Birth Weight */}
            <div className="animal-input-group">
                <label htmlFor="calfBirthWeight" className="animal-input-label">Calf birth weight (kg):</label>
                <input 
                    type="number" 
                    name="calfBirthWeight" 
                    id="calfBirthWeight" 
                    className="animal-input-box" 
                    min={0} 
                    step={0.1} 
                    value={formData.calfBirthWeight} 
                    onChange={(e) => onInputChange("calfBirthWeight", e.target.value)}
                />
            </div>

            {/* Day starter feed is first offered */}
            <div className="animal-input-group">
                <label htmlFor="starterFeedStartDay" className="animal-input-label">Day starter feed is first offered to calves:</label>
                <input 
                    type="number" 
                    name="starterFeedStartDay" 
                    id="starterFeedStartDay" 
                    className="animal-input-box" 
                    min={0} 
                    value={formData.starterFeedStartDay} 
                    onChange={(e) => onInputChange("starterFeedStartDay", e.target.value)}
                />
            </div>

            {/* Non-milk protein source */}
            <div className="animal-input-group">
                <label className="animal-input-label">Calves: Non-milk protein source in calf liquid feeds?</label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="nonMilkProteinInLiquidFeed"
                        value="false"
                        checked={!formData.nonMilkProteinInLiquidFeed}
                        onChange={() => onInputChange("nonMilkProteinInLiquidFeed", false)}
                        className="accent-dark-green"
                    />
                    <span>No</span>
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="nonMilkProteinInLiquidFeed"
                        value="true"
                        checked={formData.nonMilkProteinInLiquidFeed}
                        className="accent-dark-green"
                        onChange={() => onInputChange("nonMilkProteinInLiquidFeed", true)}
                    />
                    <span>Yes</span>
                </label>
            </div>

            {/* Rumen development discount */}
            <div className="animal-input-group">
                <label className="animal-input-label">Calves: Rumen development discount?</label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="rumenDevelopmentDiscount"
                        checked={formData.rumenDevelopmentDiscount === "none"}
                        onChange={() => onInputChange("rumenDevelopmentDiscount", "none")}
                        className="accent-dark-green"
                    />
                    <span>No dry feed discount for ME due to undeveloped rumen</span>
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="rumenDevelopmentDiscount"
                        checked={formData.rumenDevelopmentDiscount === "10pctDiscount"}
                        onChange={() => onInputChange("rumenDevelopmentDiscount", "10pctDiscount")}
                        className="accent-dark-green"
                    />
                    <span>Use a 10% discount on dry feed if Liq &gt; 1.5% of BW</span>
                </label>
            </div>
        </div>
    )
}

export default CalfSection;