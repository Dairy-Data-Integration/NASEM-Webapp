import BioSciLogo from "../../assets/uog-biosci.png";
import CowIllustration from "../../assets/cow-illustration.png";

// HeroSection component: This is the main section of the landing page that introduces the app and provides usage information.
const HeroSection = () => {
    return (
        // Outer wrapper for spacing around the entire hero block
        <div className="flex flex-col items-center justify-center gap-8 p-8">

            {/* Main banner container: green background, text + right image */}
            <div className="flex items-center justify-between w-full bg-[#6a8f7d] rounded-xl shadow-md px-10 py-8">

                {/* Left side: logo and text */}
                <div className="flex flex-col justify-center gap-6 lg:gap-12 text-white">
                    <h1 className=" font-black text-4xl lg:text-6xl">Nutrient Requirements of Dairy Cattle - 8th Edition <br />(NASEM 2021)</h1>
                    <p className="font-medium lg:text-2xl max-w-4/5">This app is a simplified version of the model described in the 8th Edition of the {' '} 
                        <a 
                            href="https://www.nationalacademies.org/our-work/nutrient-requirements-of-dairy-cattle-8th-edition" 
                            className="font-bold underline">
                            Nutrient Requirements of Dairy Cattle book.
                        </a>
                    </p>
                </div>

                {/* Right side: cow illustration image */}
                <img src={CowIllustration} alt="Cow Illustration" className="w-[35%] max-w-2xl"/>
            </div>

            {/* Usage Notice Section */}
            <div className="bg-[#bed3c1] rounded-xl px-10 py-8 w-full flex flex-col gap-4">
                <h2 className="font-bold text-xl lg:text-3xl">Usage Notice</h2>
                <p className="text-sm lg:text-lg">The current version of this app supports Lactating and Dry Cows and is being developed for teaching and research only. This software should not be used for on-farm or commercial decisions.</p>
            </div>

            {/* Acknowledgments Section */}
            <div className="bg-[#bad2d9] rounded-xl px-10 py-8 w-full flex flex-col gap-4">
                <h2 className="font-bold text-xl lg:text-3xl">Acknowledgements</h2>
                <p className="text-sm lg:text-lg">
                    This Shiny App was written in Python by Dave Innes to interact with a version of the model translated into Python by Braeden Fieguth from the original R code that is included with the book {' '}
                    <a 
                        href="https://nap.nationalacademies.org/resource/25806/Installation_Instructions_NASEM_Dairy8.pdf"
                        className="font-bold underline">
                        and online.
                    </a>
                </p>

                {/* Github links and logo container*/}
                <div className="flex items-start justify-between w-full gap-2">

                    <div className="flex flex-col justify-center gap-4 text-sm lg:text-lg">
                        <p>The source code for the latest Python implementation of the model can be viewed {' '}
                            <a href="https://github.com/CNM-University-of-Guelph/NASEM-Model-Python" className="font-bold underline">on GitHub.</a>
                        </p>

                        <p>The source code for this Shiny app (and instructions for running on local computer) can be viewed {' '}
                             <a href="https://github.com/CNM-University-of-Guelph/NASEM-shiny" className="font-bold underline">on GitHub.</a>
                        </p>
                    </div>

                    <img src={BioSciLogo} alt="University of Guelph Animal Biosciences Logo" className="w-1/4 max-w-lg"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
