import Cards from "./Cards"
import { project } from '../staticAssets/images.ts'
import { links } from '../staticAssets/links'

function Projects() {
    return (
        <div className="w-full py-6 flex flex-col justify-center items-center shadow-2xl gap-2">
            <div className="pt-4 pb-2 border-b text-center text-2xl font-semibold border-b-gray-700 w-full">
                <h1>Work / Contributions</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:justify-around items-center gap-4 lg:gap-6 py-2 lg:py-6">
                <Cards imageUrl={project?.allenNext} description="Online prep for NExT, NEET PG, INICET & FMGE by expert faculty" title="ALLEN Next" watch={false} link={""} />
                <Cards imageUrl={project?.vod} title="Video on Demand" description="Smart VOD Solution for Seamless Learning Anytime" watch={false} link={""} />
                <Cards imageUrl={project?.allenDigital} title="ALLEN Digital" description="ALLEN: India’s Best Coaching for NEET, JEE & Classes 6–10, Since 1988" watch={false} link={links?.allenIn} />
                <Cards imageUrl={project?.allenGlobal} title="ALLEN Global Studies" description="Expert Test Prep & Guidance for Top 200 Global University Admits" watch={false} link={links?.allenGlobal} />
                <Cards imageUrl={project?.allenAstra} title="ALLEN Astra Console" description="ALLEN: India’s Best Coaching for NEET, JEE & Classes 6–10, Since 1988" watch={false} link={links?.allenIn} />
                <Cards imageUrl={project?.mentorashwar} title="Mentoreshwar" description="Mentoreshwar: Empowering CA Aspirants with Tests, Mentors & Training"  watch={false} link={links?.mentoreshwar} />
                <Cards imageUrl={project?.chat} title="Chat Application" description="Instant, Secure & Smart Chat App for Seamless Communication" watch={false} link={links?.chatApplication} />
                <Cards imageUrl={project?.foodRecipe} title="Food Recipie App" description="Delicious Recipes at Your Fingertips – Cook, Save & Share" watch={false} link={links?.allenIn} />
            </div>
        </div>
    )
}

export default Projects