import { useState } from "react";
import NavbarLink from "./NavbarLink";
import Button from "../../ui/Button/Button";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons
import { useScrollDirection } from "../../../hooks/useScrollDirection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrollingDown = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-black/10 backdrop-blur-[6px] z-[9999] shadow-sm w-[90%] lg:w-[80%] rounded-lg transition-all duration-300 fixed top-10        
        ${isScrollingDown ? "-translate-y-full hidden" : "translate-y-0"}`}
    >
      <div className="flex items-center justify-between h-[124px] px-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-4xl font-bold text-white tracking-wider">
            LOGO
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center space-x-4">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About Us</NavbarLink>
            <NavbarLink href="/owners">Owners</NavbarLink>
            <NavbarLink href="/tenants">Tenants</NavbarLink>
            <NavbarLink href="/properties">Properties</NavbarLink>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button variant="primary">Start Treatment</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden pl-8 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 pb-6">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/about">About Us</NavbarLink>
          <NavbarLink href="/owners">Owners</NavbarLink>
          <NavbarLink href="/tenants">Tenants</NavbarLink>
          <NavbarLink href="/properties">Properties</NavbarLink>
          <div className="pt-4">
            <Button variant="primary" className="w-full">
              Start Treatment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
