import React from "react";
import { NavLink } from "react-router-dom";

function Navlink({ path, icon: Icon, linkName, onClick }) {
  return (
    <NavLink
      onClick={onClick}
      exact
      to={path}
      className='py-2 px-2 rounded-lg text-sm hover:bg-indigo-500 hover:text-white transition-colors group flex items-center'
      activeClassName='bg-indigo-500 text-white'>
      <Icon className='w-6 h-6 mr-3 ' />
      <div className='leading-6'>{linkName}</div>
    </NavLink>
  );
}

export default Navlink;
