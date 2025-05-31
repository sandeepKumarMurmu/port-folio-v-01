import { useToggleStore } from '../store/useThemeStore';
import proImage from '../assets/sandeep.png'
import { links } from '../staticAssets/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


function Hero() {
    const { toggle } = useToggleStore();
    return (
        <>
            <section className='md:grid md:grid-cols-2 flex flex-col lg:py-33 md:py-40 py-14 px-4 justify-center md:items-center gap-4'>

                <div className='order-2 md:order-1 flex gap-3 flex-col w-full max-w-md'>
                    <div className=''>
                        <p className='text-xl font-thin md:text-left text-center mb-5'>Hello There !!</p>
                        <div className='flex items-baseline gap-2 md:justify-start justify-center'>
                            <p className='text-xl font-thin'>I'm</p>
                            <h1 className='text-3xl font-bold'>Sandeep Kr. Murmu</h1>
                        </div>
                        <p className='font-normal text-lg md:text-left text-center mt-3 mb-5'>The Full-Stack Software Engineer</p>
                    </div>
                    <div className="flex gap-4 md:justify-start justify-center">
                        <a href={links?.resumeLink} target='_blank' className='btn btn-outline rounded-2xl'>Hire Me</a>
                        <button className='btn btn-outline rounded-2xl' onClick={toggle}>Get In Touch</button>
                        <a
                            href={links?.linkDin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline rounded-2xl flex items-center justify-center hover:text-[#0077b5]" 
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href={links?.linkDin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline rounded-2xl flex items-center justify-center "
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                </div>
                <div className="w-full overflow-hidden rounded-lg order-1 md:order-2">
                    <img src={proImage} alt="Profile" className="w-full h-full object-cover" />
                </div>

            </section>
        </>
    );
}

export default Hero;