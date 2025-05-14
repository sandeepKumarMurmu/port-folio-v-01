import { ThemeToggle } from './ThemeTogle';
// import { Link } from 'react-router-dom';
import LinkTag from './LinkTag';

function Navbar() {
    return (
        <div className="navbar bg-base-200 px-10 shadow-md mx-auto w-full fixed top-0 z-50">
            <div className="navbar-start">
                <LinkTag link='/' styles='text-xl cursor-pointer font-bold' tagName='S. K. Murmu' />
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-4 px-4">
                    <div className="tabs tabs-bordered">
                        <LinkTag link='/' styles='tab text-base' tagName='Home' />
                        <LinkTag link='/skills' styles='tab text-base' tagName='Skills' />
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar