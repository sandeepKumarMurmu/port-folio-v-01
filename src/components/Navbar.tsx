import { ThemeToggle } from './ThemeTogle';
import LinkTag from './LinkTag';
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

import { useToggleStore } from '../store/useThemeStore';

function Navbar() {
    const { toggle } = useToggleStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section className='bg-base-300 py-5 px-4 md:px-10 w-full top-0 fixed z-50 shadow-md'>
            <nav className='w-full max-w-[1440px] mx-auto'>
                <div className='flex justify-between'>
                    <div className='text-left flex items-center justify-center'>
                        <LinkTag link='/' styles='text-xl cursor-pointer font-bold' tagName='Sandeep' />
                    </div>
                    <div className='flex flex-row-reverse gap-6'>
                        <div><ThemeToggle /></div>
                        <div>
                            <button
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                                className="lg:hidden flex items-center justify-center h-10 w-10"
                            >
                                {isOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <MenuIcon className="w-6 h-6" />
                                )}
                            </button>

                            <div className='hidden lg:block'>
                                <LinkTag link="/" styles="tab text-base" tagName="Home" />
                                <LinkTag link="/skills" styles="tab text-base" tagName="Skills" />
                                <LinkTag link="/professional-experince" styles="tab text-base" tagName="Experience" />
                                <div className='tab text-base' onClick={toggle}>Get In Touch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="absolute right-0 w-50 bg-base-300 z-40 flex flex-col items-center py-4 space-y-2 lg:hidden">
                    <LinkTag
                        link="/"
                        styles="tab text-base text-base-content font-medium px-4 py-2"
                        tagName="Home"
                    />
                    <LinkTag
                        link="/skills"
                        styles="tab text-base text-base-content font-medium px-4 py-2"
                        tagName="Skills"
                    />
                    <LinkTag
                        link="/professional-experince"
                        styles="tab text-base text-base-content font-medium px-4 py-2"
                        tagName="Experience"
                    />
                    <div className='tab text-base text-base-content font-medium px-4 py-2' onClick={toggle}>Get In Touch</div>
                </div>

            )}
        </section>
    )
}

export default Navbar