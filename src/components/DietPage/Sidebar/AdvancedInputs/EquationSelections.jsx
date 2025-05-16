import { useAnimalInputsForm } from "../AnimalInputsFormContext";

const EquationSelections = () => {
    const { formData, onInputChange} = useAnimalInputsForm();

    return (
        <div className="animal-input-sidebar-section">

            {/* Milk production equation */}
            <div className="animal-input-group">
                <label className="animal-input-label">Milk production equation to use for calc (currently hard-coded to use Trg_MilkProd):</label>
                {[
                    { label: "Trg_MilkProd", value: "trg" },
                    { label: "component based predicted", value: "component" },
                    { label: "NE Allowable", value: "ne" },
                    { label: "MP Allowable", value: "mp" },
                    { label: "min(NE,MPAllow)", value: "min" },
                ].map(option => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="equationMilkProduction"
                            checked={formData.equationMilkProduction === option.value}
                            onChange={() => onInputChange("equationMilkProduction", option.value)}
                            className="accent-dark-green"
                        />
                        {option.label}
                    </label>
                ))}
            </div>

            {/* Milk Protein equations and AA coefficients */}
            <div className="animal-input-group">
                <label className="animal-input-label">Milk Protein equations and AA coefficients to use.Target TP will use target TP for protein equations and NRC coefficients in AA equations.Predict TP with NRC equations and coefficients (NRC 2021)VT1 coefficients from Dec. 20, 2020 - Virginia Tech (no Phe, Thr, Trp, or Val)VT2 coefficients from April, 2022 solutions after further data cleaning - Virginia Tech (no Arg, Phe, Trp, or Val)</label>
                {[
                    { label: "Target TP", value: "target" },
                    { label: "Predicted: NRC", value: "nrc" },
                    { label: "Predicted: VT1", value: "vt1" },
                    { label: "Predicted: VT2", value: "vt2" },
                ].map(option => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="equationMilkProtein"
                            checked={formData.equationMilkProtein === option.value}
                            onChange={() => onInputChange("equationMilkProtein", option.value)}
                            className="accent-dark-green"
                        />
                        {option.label}
                    </label>
                ))}
            </div>

            {/* Milk Fat Prediction equations */}
            <div className="animal-input-group">
                <label className="animal-input-label">Milk Fat prediction equation</label>
                {[
                    { label: "Trg_MilkFatp", value: "trg" },
                    { label: "Predicted milk fat production", value: "predicted" },
                ].map(option => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="equationMilkFat"
                            checked={formData.equationMilkFat === option.value}
                            onChange={() => onInputChange("equationMilkFat", option.value)}
                            className="accent-dark-green"
                        />
                        {option.label}
                    </label>
                ))}
            </div>

            {/* Microbial Nitrogen (MiN) equation */}
            <div className="animal-input-group">
                <label className="animal-input-label">Microbial Nitrogen (MiN) equation to use.</label>
                {[
                    { label: "NRC (2021)", value: "nrc" },
                    { label: "Hanigan (2021)", value: "hanigan" },
                    { label: "White (2017)", value: "white" },
                ].map(option => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="equationMicrobialN"
                            checked={formData.equationMicrobialN === option.value}
                            onChange={() => onInputChange("equationMicrobialN", option.value)}
                            className="accent-dark-green"
                        />
                        {option.label}
                    </label>
                ))}
            </div>

            {/* Use_DNDF_IV */}
            <div className="animal-input-group">
                <label className="animal-input-label">Use_DNDF_IV (NASEM default is Lg based)</label>
                {[
                    { label: "Lg based", value: "lg" },
                    { label: "DNDF48 for forages", value: "forage" },
                    { label: "DNDF48 for all", value: "all" },
                ].map(option => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="equationDNDF_IV"
                            checked={formData.equationDNDF_IV === option.value}
                            onChange={() => onInputChange("equationDNDF_IV", option.value)}
                            className="accent-dark-green"
                        />
                        {option.label}
                    </label>
                ))}
            </div>

             {/* Use Monensin */}
            <div className="animal-input-group">
                <label className="animal-input-label">Use Monensin equations?</label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="useMonensin"
                        checked={!formData.useMonensin}
                        onChange={() => onInputChange("useMonensin", false)}
                        className="accent-dark-green"
                    />
                    No
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="useMonensin"
                        checked={formData.useMonensin}
                        onChange={() => onInputChange("useMonensin", true)}
                        className="accent-dark-green"
                    />
                    Yes
                </label>
            </div>

        </div>
    )
}

export default EquationSelections;