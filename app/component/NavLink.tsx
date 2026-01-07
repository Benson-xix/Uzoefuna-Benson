import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
  }
  

const NavLink:React.FC<NavLinkProps>  = ({ href, title})  => {
    return (
        <Link className="block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-9 hover:text-white " href={href}>{title}</Link>
    )
};

export default NavLink;




