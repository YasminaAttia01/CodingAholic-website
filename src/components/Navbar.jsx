import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src="../assets/images/logo.png" alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/our-approach' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black" }>
          Our Approach
        </NavLink>
        <NavLink to='/testimonials' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black"}>
          Testimonials
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#3ca6d0]" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;