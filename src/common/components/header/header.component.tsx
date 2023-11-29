import { FC, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Container } from "../container/container.component";
import clsx from 'clsx';
import BurgerMenu from './burger-menu.component';

interface HeaderProps {

}


export const Header: FC<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx('py-navItem hover:text-conduit-300/80 hover:no-underline', {
            'text-conduit-100/70 transition-all duration-200': !isActive,
            'text-conduit-300 font-bold underline transition-all duration-200': isActive,
        });


    return (
        <header className='bg-conduit-200'>
            <nav className="py-2 px-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                            <img className='w-8 mr-1 hover:opacity-80 transition-all duration-200' src="https://cdn0.iconfinder.com/data/icons/coffee-172/100/Coffe-02-256.png" alt="" />
                            <Link to="/" className="font-titillium text-2xl mr-8 text-conduit-100 hover:text-conduit-300 transition-all duration-200">coffePost</Link>
                        </div>
                        <ul className="hidden pl-0 mb-0 list-none lg:flex">
                            <li>
                                <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
                            </li>
                            <li className="ml-4">
                                <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                            </li>
                        </ul>

                        <div className="lg:hidden cursor-pointer text-conduit-100" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
                    </div>
                </Container>
            </nav>
        </header>
    )
}
