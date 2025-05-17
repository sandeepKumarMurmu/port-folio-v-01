import { useToggleStore } from '../store/useThemeStore';

function Hero() {
    const { toggle } = useToggleStore();
    return (
        <div
            className="hero"
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://res.cloudinary.com/dbzootuah/image/upload/v1740286911/my_images/IMG20231002101933_s0kyge.jpg"
                    className="max-w-sm rounded-bl-4xl rounded-tr-4xl shadow-2xl opacity-80"
                />
                <div className="space-y-6 text-base">
                    <h1 className="text-4xl font-extrabold">Sandeep Kumar Murmu</h1>

                    <h2 className="text-2xl font-semibold">
                        💻 Full-Stack Software Engineer |
                        <span className="text-secondary"> Node.js · React.js · AWS Specialist</span>
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Hello!! 👋 I'm a Senior Full-Stack Engineer with
                        <span className="font-bold text-primary"> 3.8 years</span> of hands-on experience
                        architecting scalable platforms and leading backend systems across high-impact domains.
                    </p>

                    <div className="space-y-4 text-base">
                        <p>
                            🧩 I specialize in building <span className="font-semibold text-primary">distributed systems</span>,
                            <span className="font-semibold text-primary"> secure APIs</span>, and
                            <span className="font-semibold text-primary"> resilient microservices</span> using
                            <span className="badge badge-outline badge-primary mx-1">Node.js</span>
                            <span className="badge badge-outline badge-primary mx-1">Nest.js</span>
                            and
                            <span className="badge badge-outline badge-primary mx-1">Python</span>. I deliver seamless UIs with
                            <span className="badge badge-outline badge-primary mx-1">React.js</span>.
                        </p>

                        <p>
                            ☁️ I master
                            <span className="badge badge-success mx-1">AWS</span>,
                            <span className="badge badge-success mx-1">CI/CD</span> &
                            <span className="badge badge-success mx-1">Cloud Deployments</span> — having built solutions that
                            <span className="font-semibold text-primary"> reduced video delivery cost by 70%</span> and
                            <span className="font-semibold text-primary"> optimized payment flows</span>.
                        </p>

                        <p>
                            🔒 Deeply focused on
                            <span className="text-primary font-semibold"> clean architecture</span>,
                            <span className="text-primary font-semibold"> security (<span className="badge badge-outline badge-ghost mx-1">JWT</span>
                                <span className="badge badge-outline badge-ghost mx-1">oauth2</span>)</span>,
                            <span className="text-primary font-semibold"> DevOps</span> (
                            <span className="badge badge-outline badge-ghost mx-1">Git</span>
                            <span className="badge badge-outline badge-ghost mx-1">Docker</span>
                            <span className="badge badge-outline badge-ghost mx-1">Jenkins</span>
                            ), and
                            <span className="text-primary font-semibold"> database tuning</span> (
                            <span className="badge badge-outline badge-ghost mx-1">MongoDB</span>
                            <span className="badge badge-outline badge-ghost mx-1">MySQL</span>
                            ).
                        </p>

                        <p>
                            🚀 I bring not just code — but
                            <span className="font-semibold text-primary"> system thinking</span>,
                            <span className="font-semibold text-primary"> performance discipline</span>, and
                            <span className="font-semibold text-primary"> product awareness</span> to every build.
                        </p>

                        <p>Let’s craft software that performs, scales, and lasts.</p>


                        <p className="text-lg font-semibold tracking-wide">
                            Let’s connect on
                            <a
                                href="https://www.linkedin.com/in/sandeep-kumar-murmu-0567181a9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 badge badge-outline badge-primary hover:scale-105 transition-transform"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/sandeepKumarMurmu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 badge badge-outline badge-primary hover:scale-105 transition-transform"
                            >
                                GitHub
                            </a>
                            <a
                                href="mailto:snadeep.16murmu@gmail.com"
                                className="ml-2 badge badge-outline badge-primary hover:scale-105 transition-transform"
                            >
                                Mail
                            </a>
                        </p>



                    </div>
                    <button className="btn btn-accent" onClick={toggle}>Get in touch</button>
                </div>


            </div>
        </div>
    )
}

export default Hero