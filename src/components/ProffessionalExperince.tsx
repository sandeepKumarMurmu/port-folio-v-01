import { company } from '../staticAssets/images.ts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

interface propData {
    image: string,
    title: string,
    subTitle: string,
    duration: string,
    description: string,
    dateTime: string,
    id?: number,
    selectedId?: number,
    handleChange?: (id: number) => void;
}


const data: propData[] = [
    {
        image: company?.allen,
        id: 0,
        title: "ALLEN Career Institute",
        subTitle: "Software Engineer II",
        duration: "3.9 Y",
        dateTime: "Aug 2022 - Present",
        description: "At ALLEN Career Institute, I played a pivotal role in full-stack development, focusing on both frontend and backend improvements. I developed scalable modules using React.js and Node.js, contributing to a 30% reduction in page load time. I optimized RESTful APIs, improving response times by over 40%, and was responsible for automating CI/CD pipelines with GitHub Actions and AWS, reducing deployment time by 60%. My efforts also included database optimization for MongoDB and MySQL, leading to faster query performance and increased reliability. I proactively resolved critical bugs, maintained platform stability, mentored junior developers, and led cross-functional collaboration, ensuring timely delivery of 10+ high-impact features."
    },
    {
        image: company?.masai,
        id: 1,
        title: "Masai School",
        subTitle: "Trainee",
        dateTime: "Aug 2022 - Present",
        duration: "1 Y",
        description: "At Masai School, I underwent an intensive, industry-driven training program focused on full-stack web development. I mastered JavaScript, React.js, Node.js, Express.js, and MongoDB through over 1200 hours of coding and 100+ peer programming sessions. I built and deployed 5+ full-stack projects, including collaborative group projects simulating real-world agile workflows. I also led a 4-member team in a capstone project, applying version control (Git/GitHub), unit testing, and API integration. The curriculum sharpened my problem-solving skills through 200+ DSA problems, and improved my communication and teamwork via regular code reviews and stand-ups. Masai instilled a disciplined work ethic with a military-style routine, and fostered my ability to adapt, lead, and deliver under tight deadlines."
    }
]
const SmallComponent = ({ image, title, subTitle, duration, description, dateTime, id, selectedId, handleChange }: propData) => {

    return (
        <li className='w-full px-4 py-6'>

            {/* heading */}
            <div className='w-full flex flex-row justify-between py-2'>
                {/* left section */}
                <div className='flex flex-row gap-2'>
                    <div className='border-amber-200 border rounded-xl overflow-hidden'>
                        <img className="w-17 h-17 rounded-box" src={image} />
                    </div>
                    <div className='text-sm pt-0.5'>
                        <div>
                            <h1 className='font-semibold'>{title} <span className='hidden text-gray-500 md:inline'>|</span> <span className='block text-xs  text-gray-500 font-semibold md:inline'>{subTitle}</span></h1>
                        </div>
                        <div>
                            <h2 className='text-xs text-gray-500'>{dateTime}</h2>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className='flex flex-row-reverse gap-2 items-center'>
                    <div>
                        <button className='btn btn-ghost btn-outline btn-circle w-5 h-5' onClick={() => handleChange?.(id || 0)}>
                            {id === selectedId ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                        </button>
                    </div>
                    <div className='mx-auto items-center text-center w-full badge badge-sm'>{duration}</div>
                </div>
            </div>
            {/* content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden px-2 lg:px-6 ${id === selectedId
                        ? 'max-h-96 opacity-100 scale-100'
                        : 'max-h-0 opacity-0 scale-95'
                    }`}
            >
                <p className="text-xs font-bold">{description}</p>
            </div>
        </li>
    )
}

function ProffessionalExperince() {
    const [toggle, setToggle] = useState<number>(0);

    return (
        <div className='flex flex-col justify-around items-center w-full'>
            <div className='pt-4 pb-2 border-b text-center text-2xl font-semibold border-b-gray-700 w-full'>
                <h1>Experience</h1>
            </div>
            <div className='py-4 w-full'>
                <ul className="list bg-base-100 rounded-box shadow-2xl">
                    {data?.map((ele, i) => <SmallComponent id={ele.id} selectedId={toggle} handleChange={(id: number) => { setToggle(id) }} dateTime={ele?.dateTime} description={ele?.description} duration={ele?.duration} image={ele?.image} subTitle={ele?.subTitle} title={ele?.title} key={i} />)}
                </ul>
            </div>
        </div>
    )
}




export default ProffessionalExperince;