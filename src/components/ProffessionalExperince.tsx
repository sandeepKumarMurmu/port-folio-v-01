import allenIamge from '../assets/Allen.jpeg'
import masaiImage from '../assets/masai.jpg'

function ProffessionalExperince() {
    return (
        <div className="w-full px-4 flex flex-col justify-center items-center">

            <h2 className="text-3xl font-semibold text-base-content mb-2 text-center">Experience</h2>
            <div className="divider w-3xl -mt-2 mx-auto mb-6"></div>

            <ul className="list bg-base-100 w-6xl al shadow-md">

                <li className="collapse collapse-plus bg-base-100">
                    <input type="radio" name="accordion-group" />

                    <div className="collapse-title flex items-center gap-4">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                        <div>
                            <img className="size-10 rounded-xl" src={allenIamge} alt="Allen Logo" />
                        </div>
                        <div className="list-col-grow">
                            <div>
                                <span className="text-lg font-bold text-base-content">ALLEN Career Institute</span>
                                <span className="text-sm text-gray-500"> | Software Engineer II</span>
                            </div>
                            <div className="text-xs uppercase font-semibold opacity-60">Aug 2022 - Present</div>
                        </div>
                    </div>

                    <div className="collapse-content text-sm text-base-content">
                        <div className="flex flex-col md:flex-row items-start gap-6">

                            {/* Left: Image */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img src={allenIamge} alt="Project Preview" className="w-32 h-32 object-cover rounded-lg shadow" />
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:flex justify-center">
                                <div className="h-auto w-px bg-gray-300 mx-4" />
                            </div>

                            {/* Right: Description */}
                            <div className="w-full md:w-2/3">
                                <p>
                                    At ALLEN Career Institute, I played a pivotal role in full-stack development, focusing on both frontend and backend improvements. I developed scalable modules using React.js and Node.js, contributing to a 30% reduction in page load time. I optimized RESTful APIs, improving response times by over 40%, and was responsible for automating CI/CD pipelines with GitHub Actions and AWS, reducing deployment time by 60%. My efforts also included database optimization for MongoDB and MySQL, leading to faster query performance and increased reliability. I proactively resolved critical bugs, maintained platform stability, mentored junior developers, and led cross-functional collaboration, ensuring timely delivery of 10+ high-impact features.
                                </p>
                            </div>

                        </div>
                    </div>
                </li>

                <li className="collapse collapse-plus bg-base-100">
                    <input type="radio" name="accordion-group" />

                    <div className="collapse-title flex items-center gap-4">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>

                        {/* Logo hidden when accordion is open */}
                        <div >
                            <img className="size-10 rounded-xl" src={masaiImage} alt="Masai Logo" />
                        </div>

                        <div className="list-col-grow">
                            <div>
                                <span className="text-lg font-bold text-base-content">Masai School</span>
                                <span className="text-sm text-gray-500"> | Trainee</span>
                            </div>
                            <div className="text-xs uppercase font-semibold opacity-60">Aug 2021 - July 2022</div>
                        </div>
                    </div>

                    <div className="collapse-content text-sm text-base-content">
                        <div className="flex flex-col md:flex-row items-start gap-6">

                            {/* Left: Image */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img src={masaiImage} alt="Project Preview" className="w-32 h-32 object-cover rounded-lg shadow" />
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:flex justify-center">
                                <div className="h-auto w-px bg-gray-300 mx-4" />
                            </div>

                            {/* Right: Description */}
                            <div className="w-full md:w-2/3">
                                <p>
                                    At Masai School, I underwent an intensive, industry-driven training program focused on full-stack web development. I mastered JavaScript, React.js, Node.js, Express.js, and MongoDB through over 1200 hours of coding and 100+ peer programming sessions. I built and deployed 5+ full-stack projects, including collaborative group projects simulating real-world agile workflows. I also led a 4-member team in a capstone project, applying version control (Git/GitHub), unit testing, and API integration. The curriculum sharpened my problem-solving skills through 200+ DSA problems, and improved my communication and teamwork via regular code reviews and stand-ups. Masai instilled a disciplined work ethic with a military-style routine, and fostered my ability to adapt, lead, and deliver under tight deadlines.
                                </p>
                            </div>

                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default ProffessionalExperince