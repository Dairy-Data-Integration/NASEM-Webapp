import { useAnimalInputsForm } from "../AnimalInputsFormContext"

const MilkProduction = () => {
    const {formData, onInputChange} = useAnimalInputsForm()

    return (
        <div className="animal-input-sidebar-section">
            
            {/* Milk Yield */}
            <div className="animal-input-group">
                <h3 className="font-bold text-base">Milk Yield</h3>
                <label htmlFor="milkYield" className="animal-input-label">Target milk production (kg/d):</label>
                <input type="number" name="milkYield" id="milkYield" min={0} value={formData.milkYield} onChange={(e) => onInputChange("milkYield", e.target.value)} className="animal-input-box"/>
            </div>

            {/* Milk Components */}
            <div className="flex flex-col w-full gap-3">
                <h3 className="font-bold text-base">Milk Components</h3>

                {/* Target Milk Fat % */}
                <div className="animal-input-group">
                    <label htmlFor="milkFat" className="animal-input-label">Target milk fat %:</label>
                    <input type="number" name="milkFat" id="milkFat" step={0.1} min={0} value={formData.milkFat} onChange={(e) => onInputChange("milkFat", e.target.value)} className="animal-input-box"/>
                </div>

                {/* Target Milk Protein % */}
                <div className="animal-input-group">
                    <label htmlFor="milkProtein" className="animal-input-label">Target milk true protein %:</label>
                    <input type="number" name="milkProtein" id="milkProtein" step={0.1} min={0} value={formData.milkProtein} onChange={(e) => onInputChange("milkProtein", e.target.value)} className="animal-input-box"/>
                </div>

                {/* Target Milk Lactose % */}
                <div className="animal-input-group">
                    <label htmlFor="milkLactose" className="animal-input-label">Target milk lactose %:</label>
                    <input type="number" name="milkLactose" id="milkLactose" step={0.01} min={0} value={formData.milkLactose} onChange={(e) => onInputChange("milkLactose", e.target.value)} className="animal-input-box"/>
                </div>
                
            </div>

        </div>
    )

}

export default MilkProduction