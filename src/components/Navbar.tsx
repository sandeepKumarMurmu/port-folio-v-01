import { ThemeToggle } from './ThemeTogle';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-base-200 px-10 shadow-md mx-auto w-full fixed top-0 z-50">
            <div className="navbar-start">
                <Link to='/' className="text-xl cursor-pointer font-bold">S. K. Murmu</Link>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-4 px-4">
                    <div className="tabs tabs-bordered">
                        <button className="tab">Tab 2</button>
                        <button className="tab">Tab 3</button>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar