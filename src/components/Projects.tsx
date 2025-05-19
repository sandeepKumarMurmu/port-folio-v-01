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
        <div className="w-9xl p-6 flex flex-col justify-center items-center shadow-2xl bg-base-200 rounded-2xl">
            <h2 className="text-3xl font-semibold text-base-content mb-2 text-center">Work / Contributions</h2>
            <div className="divider w-3xl -mt-2 mx-auto mb-6"></div>
            <div className="w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 p-6  items-center">
                <Cards watch={false} imageUrl={allenNextImage} title="ALLEN Next" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards watch={false} imageUrl={vodImage} title="Video on Demand" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards watch={false} imageUrl={allenDigitalImage} title="ALLEN Digital" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards link={links.allenGlobal} watch={true} imageUrl={allenGlobalImage} title="ALLEN Global" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards link={links.allenIn} watch={true} imageUrl={allenAstraImage} title="ALLEN Astra Console" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards link={links.mentoreshwar} watch={true} imageUrl={mentoraswarimgage} title="Mentoreshwar" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards link={links.chatApplication} watch={true} imageUrl={chatImage} title="Chat Application" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
                <Cards link={links.foodApp} watch={true} imageUrl={foodRecipiImage} title="Food Recipie App" description="loreslfjsdljf lksj j lksdjlk fjskldj jslkjflksdjfkl  jlkajlkfjsdlk  sjlfjsalkf " />
            </div>
        </div>
    )
}

export default Projects