import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full top-0 left-0 z-50">
            <div className="bg-white/80 backdrop-blur-md shadow-md">
                <div className="max-w-7xl ml-1 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-gray-800">
                            Gestion de tâches
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link
                                to="/tasks"
                                className="text-gray-400 hover:text-[#9B7B4C] transition-colors duration-300"
                            >
                                Tâches
                            </Link>
                            <Link
                                to="/users"
                                className="text-gray-400 hover:text-[#9B7B4C] transition-colors duration-300"
                            >
                                Utilisateurs
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu}>
                                {isOpen ? (
                                    <HiX className="h-6 w-6 text-gray-800" />
                                ) : (
                                    <HiMenu className="h-6 w-6 text-gray-800" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                        <Link
                            to="/tasks"
                            className="block text-gray-800 hover:text-[#9B7B4C] transition-colors duration-300"
                        >
                            Tâches
                        </Link>
                        <Link
                            to="/users"
                            className="block text-gray-800 hover:text-[#9B7B4C] transition-colors duration-300"
                        >
                            Utilisateurs
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
