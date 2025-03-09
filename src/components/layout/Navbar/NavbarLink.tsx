interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <a
      href={href}
      className="text-white hover:text-teal-400 transition-colors px-4 py-2 block lg:inline-block text-base lg:text-sm relative group"
    >
      {children}
      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
};

export default NavbarLink;
