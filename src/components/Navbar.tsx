import { ThemeToggle } from './ThemeTogle';

function Navbar() {
    return (
        <div className="navbar bg-base-200 px-10 shadow-md rounded-md mx-auto w-10/11">
            <div className="navbar-start">
                <a className="text-xl cursor-pointer font-bold">S. K. Murmu</a>
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