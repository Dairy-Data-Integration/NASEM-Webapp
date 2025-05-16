import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const EnvironmentalGrazing = () => {
    const {formData, onInputChange} = useAnimalInputsForm();

    return (
        <div className="animal-input-sidebar-section">

            {/* Current Mean Daily Temperature */}
            <div className="animal-input-group">
                <label htmlFor="environmentTemperature" className="animal-input-label">Current mean daily temperature (°C):</label>
                <input 
                    type="number"
                    id="environmentTemperature"
                    className="animal-input-box"
                    min={-50}
                    max={50}
                    value={formData.environmentTemperature}
                    onChange={(e) => onInputChange("environmentTemperature", e.target.value)} 
                />
            </div>

            {/* Distance from the barn to parlor */}
            <div className="animal-input-group">
                <label htmlFor="distanceToParlor" className="animal-input-label">Distance from the barn or paddock to the parlor (meters):</label>
                <input 
                    type="number"
                    id="distanceToParlor"
                    className="animal-input-box"
                    min={0}
                    value={formData.distanceToParlor}
                    onChange={(e) => onInputChange("distanceToParlor", e.target.value)} 
                />
            </div>

            {/* Number of daily trips to and from parlor */}
            <div className="animal-input-group">
                <label htmlFor="dailyParlorTrips" className="animal-input-label">Number of daily trips to and from the parlor:</label>
                <input 
                    type="number"
                    id="dailyParlorTrips"
                    className="animal-input-box"
                    min={0}
                    value={formData.dailyParlorTrips}
                    onChange={(e) => onInputChange("dailyParlorTrips", e.target.value)} 
                />
            </div>

            {/* Positive elevation change per day */}
            <div className="animal-input-group">
                <label htmlFor="dailyElevationChange" className="animal-input-label">Positive elevation change per day (meters):</label>
                <input 
                    type="number"
                    id="dailyElevationChange"
                    className="animal-input-box"
                    min={0}
                    value={formData.dailyElevationChange}
                    onChange={(e) => onInputChange("dailyElevationChange", e.target.value)} 
                />
            </div>            
        </div>
    )
}

export default EnvironmentalGrazing;