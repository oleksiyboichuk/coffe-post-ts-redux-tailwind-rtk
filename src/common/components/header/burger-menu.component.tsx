// BurgerMenu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}


const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={clsx('fixed inset-0 bg-black/70 z-50 transition-transform ease-out duration-200', { 'translate-x-full': !isOpen })} onClick={onClose}>
            <div className="fixed top-0 right-0 bottom-0 flex items-center justify-center bg-white w-[60%] transition-transform ease-out">
                <div className='absolute right-0 top-0 pr-4 pt-2 text-3xl font-bold text-conduit-500 drop-shadow-md' onClick={onClose}>X</div>
                <ul className="text-white text-2xl">
                    <li className="mb-4">
                        <NavLink to="/" onClick={onClose} className="text-conduit-200 text-3xl hover:text-conduit-300 transition-color duration-200">
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink to="/about" onClick={onClose} className="text-conduit-200 text-3xl hover:text-conduit-300 transition-color duration-200">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
