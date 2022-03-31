import React, { useState } from "react";
import { NavLink } from ".";
import useAuth from "../../hooks/use-auth";
import useCart from "../../hooks/use-cart";
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const NavigationTest = () => (
  <div>
    <Navigation type='horizontal' actions={actions} />
    <Navigation type='vertical'>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
);

export default function SiteTopNav() {
  const { user, signOut } = useAuth();
  const { itemsCount } = useCart();
  const [blockMenu, setBlockMenu] = useState();

  

  return (
    <div className="flex items-center">
      <div className="lg:inline-flex md:inline-block space-x-4">
        <nav
          className="lg:inline-flex md:items-center md:justify-center lg:space-x-2"
          id="nav-links"
        >
          <NavLink to="/shop">SHOP</NavLink>
          {!user && <NavLink to="/login">SIGN IN</NavLink>}
          <NavLink to="/profile">PROFILE</NavLink>
          {!user && <NavLink to="/register">SIGN UP</NavLink>}
          <NavLink to="/cart">
            {itemsCount > 0 ? `CART(${itemsCount})` : "CART"}
          </NavLink>
        </nav>
        {blockMenu ? (
          <p className="lg:hidden">
            <nav className="flex flex-col">
              <NavLink to="/shop" onClick={() => setBlockMenu()}>
                SHOP
              </NavLink>
              {!user && (
                <NavLink to="/login" onClick={() => setBlockMenu()}>
                  SIGN IN
                </NavLink>
              )}
              <NavLink to="/profile" onClick={() => setBlockMenu()}>
                PROFILE
              </NavLink>
              {!user && (
                <NavLink to="/register" onClick={() => setBlockMenu()}>
                  SIGN UP
                </NavLink>
              )}
              <NavLink to="/cart" onClick={() => setBlockMenu()}>
                {itemsCount > 0 ? `CART(${itemsCount})` : "CART"}
              </NavLink>
            </nav>
          </p>
        ) : null}
        {blockMenu ? null : (
          <span
            className="md:hidden"
            onClick={() => {
              setBlockMenu(!blockMenu);
            }}
          >
            <i className="fa fa-bars"></i>
          </span>
        )}
        {user ? (
          <button
            className="text-left w-20 rounded-lg border-b-2 hover:bg-white hover:text-white"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : null}
      </div>
    </div>
  );
}
