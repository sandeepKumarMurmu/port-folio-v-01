import { Linkedin, Github, Mail } from "lucide-react"; // Use your preferred icons

function Footer() {
    return (
        <section className="bg-base-300 md:px-0 p-12 w-full">
            <footer className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col">
                    <div className="md:grid md:grid-cols-3 flex flex-col mb-5 text-center">
                        <div className="md:border-r-2 border-base-100 md:border-b-0 border-b-1 p-2">
                            <div className="mx-auto text-center font-semibold">
                                {/* 👇 Show on small and large screens */}
                                <h2 className="text-l md:hidden lg:block">
                                    Sandeep
                                    <span className="text-sm font-normal text-neutral-500"> (Full-Stack Developer)</span>
                                </h2>

                                {/* 👇 Show on medium screens */}
                                <div className="hidden sm:block lg:hidden">
                                    <h2 className="text-l">Sandeep Kr. Murmu</h2>
                                    <p className="text-sm font-normal text-neutral-500">(Full-Stack Developer)</p>
                                </div>
                            </div>
                            <div className="text-xs  text-neutral-500">
                                <p> Let’s build something impactful — clean code, smooth UX, and solid performance..</p>
                            </div>
                        </div>
                        <div className="md:border-r-2 border-base-100 md:border-b-0 border-b-1 p-2">
                            <div className="text-l font-semibold text-center">
                                <h2 >Let's Connect..</h2>
                            </div>
                            <div className="flex gap-2 justify-center pt-2 ">
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/sandeep-kumar-murmu-0567181a9"
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="mailto:sandeep.16murmu@gmail.com"
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Mail size={18} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/sandeepKumarMurmu"
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="border-b md:border-b-0 border-base-100 p-2">
                        <h2 className="text-m font-semibold">Stay in Touch!!!</h2>
                        <p className="text-xs  text-neutral-500">I appreciate you stopping by! 🚀 Let's stay connected and create something impactful together.</p>
                        </div>

                    </div>
                    <div className="text-center text-xs  text-neutral-500 border-base-100 md:border-t md:pt-4">
                        <p>© 2025 Sandeep Kr. Murmu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer