import { ThemeToggle } from './ThemeTogle';
import LinkTag from './LinkTag';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='navbar bg-base-300 top-0 w-full fixed z-50 shadow-md md:px-10'>
            <div className='flex-1'>
                <LinkTag link='/' styles='text-xl cursor-pointer font-bold' tagName='S. K. Murmu' />
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-4 navbar-end lg:flex">
                <div className="tabs tabs-bordered">
                    <LinkTag link="/" styles="tab text-base" tagName="Home" />
                    <LinkTag link="/skills" styles="tab text-base" tagName="Skills" />
                    <LinkTag link="/professional-experince" styles="tab text-base" tagName="Experience" />
                </div>
                <ThemeToggle isIcon={true} />
            </div>

            {/* Hamburger for mobile */}
            <div className="nav-end flex gap-2 lg:hidden">
                <ThemeToggle isIcon={false} />
                <button
                    onClick={toggleMenu}
                    className="btn btn-ghost btn-circle"
                    aria-label="Toggle Menu"
                >
                    <MenuIcon className="w-6 h-6" />
                </button>
            </div>


            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute h-screen top-full right-0 w-64 bg-base-300 z-10 flex flex-col items-center py-4 space-y-2 lg:hidden">
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
                </div>

            )}
        </nav>
    )
}

export default Navbar