import BioSciLogo from "../../assets/uog-biosci.png";
import CowIllustration from "../../assets/cow-illustration.png";

// HeroSection component: This is the main section of the landing page that introduces the app and provides usage information.
const HeroSection = () => {
    return (
        // Outer wrapper for spacing around the entire hero block
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-8 p-4 sm:p-8 h-full">

            {/* Main banner container: green background, text + right image */}
            <div className="flex flex-col xs:flex-row items-center justify-between w-full bg-[#6a8f7d] rounded-xl shadow-md px-5 py-4 sm:px-10 sm:py-8">

                {/* Left side: text */}
                <div className="flex flex-col justify-center gap-2 sm:gap-6 lg:gap-12 text-white">
                    <h1 className="font-black text-2xl sm:text-4xl lg:text-6xl">Nutrient Requirements of Dairy Cattle - 8th Edition (NASEM 2021)</h1>
                    <p className="font-medium text-xs sm:text-base lg:text-2xl max-w-4/5">This app is a simplified version of the model described in the 8th Edition of the {' '} 
                        <a 
                            href="https://www.nationalacademies.org/our-work/nutrient-requirements-of-dairy-cattle-8th-edition" 
                            className="font-bold underline">
                            Nutrient Requirements of Dairy Cattle book.
                        </a>
                    </p>
                </div>

                {/* Right side: cow illustration image */}
                <img src={CowIllustration} alt="Cow Illustration" className="w-3/4 xs:w-[35%] max-w-2xl"/>
            </div>

            {/* Usage Notice Section */}
            <div className="bg-[#bed3c1] rounded-xl px-5 py-4 sm:px-10 sm:py-8 w-full flex flex-col gap-2 sm:gap-4">
                <h2 className="font-bold text-lg sm:text-xl lg:text-3xl">Usage Notice</h2>
                <p className="text-xs sm:text-sm lg:text-lg">The current version of this app supports Lactating and Dry Cows and is being developed for teaching and research only. This software should not be used for on-farm or commercial decisions.</p>
            </div>

            {/* Acknowledgments Section */}
            <div className="bg-[#bad2d9] rounded-xl px-5 py-4 sm:px-10 sm:py-8 w-full flex flex-col gap-2 sm:gap-4">
                <h2 className="font-bold text-lg sm:text-xl lg:text-3xl">Acknowledgements</h2>
                <p className="text-xs sm:text-sm lg:text-lg">
                    This webapp was developed by Bilal Elkhouly and Emma Balint based on an original design by Dave Innes. 
                    The underlying model was translated into Python by Braeden Fieguth from the original R code included with the book {' '}
                    <a 
                        href="https://nap.nationalacademies.org/resource/25806/Installation_Instructions_NASEM_Dairy8.pdf"
                        className="font-bold underline">
                        and online.
                    </a>
                </p>

                {/* Github links and logo container*/}
                <div className="flex flex-col xs:flex-row items-end xs:items-start justify-between w-full gap-2">
                    <p className="text-xs sm:text-sm lg:text-lg">The source code for the latest Python implementation of the model can be viewed {' '}
                        <a href="https://github.com/CNM-University-of-Guelph/NASEM-Model-Python" className="font-bold underline">on GitHub.</a>
                    </p>

                    <img src={BioSciLogo} alt="University of Guelph Animal Biosciences Logo" className="w-1/2 xs:w-1/4 max-w-lg"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
