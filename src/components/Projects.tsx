import Cards from "./Cards"

import allenNextImage from '../assets/AllenNext.jpeg';
import allenDigitalImage from '../assets/AllenDigital.jpeg'
import allenGlobalImage from '../assets/AllenGlobal.jpg'
import allenAstraImage from '../assets/AllenAstra.webp'
import mentoraswarimgage from '../assets/mentoreshwar_logo.jpeg'
import chatImage from '../assets/chat.webp';
import foodRecipiImage from '../assets/FoodRecipi.jpg';
import vodImage from '../assets/vod.jpg';


import { links } from '../staticAssets/links'

function Projects() {
    return (
        <div className="w-9xl p-6 flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-semibold text-base-content mb-2 text-center">Work / Contributions</h2>
            <div className="divider w-3xl -mt-2 mx-auto mb-6"></div>
            <div className="w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 p-6  items-center">
                <Cards watch={false} imageUrl={allenNextImage} title="ALLEN Next" description="Online prep for NExT, NEET PG, INICET & FMGE by expert faculty" />
                <Cards watch={false} imageUrl={vodImage} title="Video on Demand" description="Smart VOD Solution for Seamless Learning Anytime" />
                <Cards watch={false} imageUrl={allenDigitalImage} title="ALLEN Digital" description="ALLEN: India’s Best Coaching for NEET, JEE & Classes 6–10, Since 1988" />
                <Cards link={links.allenGlobal} watch={true} imageUrl={allenGlobalImage} title="ALLEN Global Studies" description="Expert Test Prep & Guidance for Top 200 Global University Admits" />
                <Cards link={links.allenIn} watch={true} imageUrl={allenAstraImage} title="ALLEN Astra Console" description="ALLEN: India’s Best Coaching for NEET, JEE & Classes 6–10, Since 1988" />
                <Cards link={links.mentoreshwar} watch={true} imageUrl={mentoraswarimgage} title="Mentoreshwar" description="Mentoreshwar: Empowering CA Aspirants with Tests, Mentors & Training" />
                <Cards link={links.chatApplication} watch={true} imageUrl={chatImage} title="Chat Application" description="Instant, Secure & Smart Chat App for Seamless Communication" />
                <Cards link={links.foodApp} watch={true} imageUrl={foodRecipiImage} title="Food Recipie App" description="Delicious Recipes at Your Fingertips – Cook, Save & Share" />
            </div>
        </div>
    )
}

export default Projects