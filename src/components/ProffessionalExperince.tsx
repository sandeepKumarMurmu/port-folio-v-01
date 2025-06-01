import { company } from '../staticAssets/images.ts'

interface propData {
    image: string,
    title: string,
    subTitle: string,
    duration: string,
    description: string
}

const data: propData[] = [
    {
        image: company?.allen,
        title: "LLEN Career Institute",
        subTitle: "Software Engineer II (3.9 Years)",
        duration: "Aug 2022 - Present",
        description: "At ALLEN Career Institute, I played a pivotal role in full-stack development, focusing on both frontend and backend improvements. I developed scalable modules using React.js and Node.js, contributing to a 30% reduction in page load time. I optimized RESTful APIs, improving response times by over 40%, and was responsible for automating CI/CD pipelines with GitHub Actions and AWS, reducing deployment time by 60%. My efforts also included database optimization for MongoDB and MySQL, leading to faster query performance and increased reliability. I proactively resolved critical bugs, maintained platform stability, mentored junior developers, and led cross-functional collaboration, ensuring timely delivery of 10+ high-impact features."
    },
    {
        image: company?.masai,
        title: "Masai School",
        subTitle: "Trainee (1 Years)",
        duration: "Aug 2021 - July 2022",
        description: "At Masai School, I underwent an intensive, industry-driven training program focused on full-stack web development. I mastered JavaScript, React.js, Node.js, Express.js, and MongoDB through over 1200 hours of coding and 100+ peer programming sessions. I built and deployed 5+ full-stack projects, including collaborative group projects simulating real-world agile workflows. I also led a 4-member team in a capstone project, applying version control (Git/GitHub), unit testing, and API integration. The curriculum sharpened my problem-solving skills through 200+ DSA problems, and improved my communication and teamwork via regular code reviews and stand-ups. Masai instilled a disciplined work ethic with a military-style routine, and fostered my ability to adapt, lead, and deliver under tight deadlines."
    }
]
const SmallComponent = ({ image, title, subTitle, duration, description }: propData) => {
    return (
        <li className="list-row">
            <div className='flex items-center justify-center'><img className="size-10 rounded-box" src={image} /></div>
            <div>
                <div>  <span className="text-lg font-bold text-base-content">{title}</span>
                    <span className="text-sm text-gray-500 block md:inline"> <span className='hidden md:inline'>|</span> {subTitle}</span></div>
                <div className="text-xs uppercase font-semibold opacity-60">{duration}</div>
            </div>
            <p className="list-col-wrap text-xs lg:text-sm">
                {description}
            </p>
        </li>
    )
}

function ProffessionalExperince() {
    return (
        <div className='flex flex-col justify-around items-center'>
            <div className='pt-4 pb-2 border-b text-center text-2xl font-semibold border-b-gray-700 w-full'>
                <h1>Experience</h1>
            </div>
            <div className='py-4'>
                <ul className="list bg-base-100 rounded-box shadow-2xl">
                    {data?.map((ele, i) => <SmallComponent description={ele?.description} duration={ele?.duration} image={ele?.image} subTitle={ele?.subTitle} title={ele?.title} key={i} />)}
                </ul>
            </div>
        </div>
    )
}




export default ProffessionalExperince;