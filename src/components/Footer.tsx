import { Linkedin, Github, Mail } from "lucide-react"; // Use your preferred icons

function Footer() {
    return (
        <footer className="footer sm:footer-vertical bg-base-200 text-base-content p-10">
            <div className="flex w-full h-full divide-x divide-base items-stretch">
                <div className="flex-1 p-6 space-y-2 text-center">
                    <h2 className="text-xl font-semibold">
                        Sandeep Kr. Murmu
                        <span className="ml-2 text-base font-normal text-neutral-500">
                            (Full-Stack Developer)
                        </span>
                    </h2>
                    <p >
                        Let’s build something impactful — clean code, smooth UX, and solid performance..
                    </p>
                </div>
                <div className="flex-1 p-6  space-y-5 text-center">
                    <h2 className="text-xl font-semibold">Let's Connect</h2>
                    <ul className="flex gap-x-6 items-center justify-center">
                        <li className="flex items-center gap-x-2 cursor-pointer">
                            <Linkedin size={18} />
                            <a href="https://www.linkedin.com/in/sandeep-kumar-murmu-0567181a9" target="_blank" />
                        </li>
                        <li className="flex items-center gap-x-2 cursor-pointer">
                            <Github size={18} />
                            <a href="https://github.com/sandeepKumarMurmu" target="_blank" />

                        </li>
                        <li className="flex items-center gap-x-2 cursor-pointer">
                            <Mail size={18} />
                            <a href="mailto:sandeep.16murmu@gmail.com" target="_blank" />
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-6 space-y-2 text-center">
                    <h2 className="text-xl font-semibold">Stay in Touch!!!</h2>
                    <p className=" text-base">
                        I appreciate you stopping by! 🚀 Let's stay connected and create something impactful together.
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center text-base text-neutral-500">
                <p className="text-center">© 2025 Sandeep Kr. Murmu. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer