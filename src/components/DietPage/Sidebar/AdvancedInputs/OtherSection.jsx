import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const OtherSection = () => {
    const { formData, onInputChange } = useAnimalInputsForm();

    return (
        <div className="animal-input-sidebar-section">

            {/* Animal mature bodyweight */}
            <div className="animal-input-group">
                <label htmlFor="matureBodyWeight" className="animal-input-label">Animal mature bodyweight (kg):</label>
                <input 
                    type="number"
                    id="matureBodyWeight"
                    className="animal-input-box"
                    min={0}
                    value={formData.matureBodyWeight} 
                    onChange={(e) => onInputChange("matureBodyWeight", e.target.value)}
                />
            </div>

            {/* Gestation Length */}
            <div className="animal-input-group">
                <label htmlFor="gestationLength" className="animal-input-label">Gestation length (d)</label>
                <input 
                    type="number"
                    id="gestationLength"
                    className="animal-input-box"
                    min={0}
                    value={formData.gestationLength} 
                    onChange={(e) => onInputChange("gestationLength", e.target.value)}
                />
            </div>

            {/* Milk True Protein rolling heard average */}
            <div className="animal-input-group">
                <label htmlFor="trueProteinRollingAverage" className="animal-input-label">Milk True Protein rolling herd average (kg/305 d)</label>
                <input 
                    type="number"
                    id="trueProteinRollingAverage"
                    className="animal-input-box"
                    min={0}
                    value={formData.trueProteinRollingAverage} 
                    onChange={(e) => onInputChange("trueProteinRollingAverage", e.target.value)}
                />
            </div>
            
        </div>
    )
}

export default OtherSection;