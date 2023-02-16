import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
      <li>
        <Link to="signin">Sign In</Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link className="text-xl font-bold">Work Finder</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">{menus}</ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/315979480_866742761009362_1000142067801083796_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlPZVf0KdEYiWhQpVPIQrxFCBiaeL2j2QUIGJp4vaPZPPoPhcHboq1pwts0id9s_0crksLFVpK_KZn5J30Cwdq&_nc_ohc=o6rsfyV9JwYAX-KQHpQ&_nc_ht=scontent.fcgp28-1.fna&oh=00_AfC-BlkEKZDpJDBdVlcNLUgQ76GJUf4yfNclSY4G4v7dUg&oe=63F38F63" alt=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 md:hidden p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
