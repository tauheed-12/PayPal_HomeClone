import React from 'react';

const Menu = (props) => {
  const { clicked } = props;
  const menuClassName = clicked
    ? "absolute md:hidden top-16 left-4 flex flex-col gap-4 pl-6 py-8 text-black z-20 bg-white pr-12"
    : "hidden";

  return (
    <div className={menuClassName}>
      <span>Personal</span>
      <span>Business</span>
      <span>Developer</span>
      <span>Help</span>
    </div>
  );
}

export default Menu;
