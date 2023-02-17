import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = (
    <>
      <li>
        <Link className='font-semibold hover:text-sky-500' to="/">Home</Link>
      </li>
      <li>
        <Link className='font-semibold hover:text-sky-500' to="about">About</Link>
      </li>
      <li>
        <Link className='font-semibold hover:text-sky-500' to="contact">Contact Us</Link>
      </li>
      <li>
        <Link className='font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm' to="signin">Sign In</Link>
      </li>
    </>
  );
  return (
    <div className="navbar py-5">
      <div className="flex-1">
        <Link className="text-2xl font-bold"><span className="text-sky-500">Work</span> <span className="text-green-500">Finder</span></Link>
      </div>
      <div className="flex-none gap-8">
        <ul className="px-1 hidden md:flex justify-center items-center gap-8">{menus}</ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/315979480_866742761009362_1000142067801083796_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlPZVf0KdEYiWhQpVPIQrxFCBiaeL2j2QUIGJp4vaPZPPoPhcHboq1pwts0id9s_0crksLFVpK_KZn5J30Cwdq&_nc_ohc=o6rsfyV9JwYAX-KQHpQ&_nc_ht=scontent.fcgp28-1.fna&oh=00_AfC-BlkEKZDpJDBdVlcNLUgQ76GJUf4yfNclSY4G4v7dUg&oe=63F38F63" alt=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 bg-white md:hidden p-2 shadow menu menu-compact dropdown-content w-52"
          >
            {menus}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
