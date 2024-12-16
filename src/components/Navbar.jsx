import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src="../assets/images/logo.png" alt='logo' className='w-20 h-17 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;