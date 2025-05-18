import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../assets/avatar.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    {dotColor && (
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
    )}
    {icon}
  </button>
);

const Navbar = () => {
  const {
    currentColor,
    setActiveMenu,
    handleClick,
    setScreenSize,
    screenSize,
    currentMode,
    setCurrentMode,
    setMode,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    setActiveMenu(screenSize > 900);
  }, [screenSize, setActiveMenu]);

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const toggleTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setCurrentMode(newMode);
    setMode(newMode);
  };

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={toggleMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex items-center">
        {currentMode === "light" ? (
          <IoMdSunny
            color={currentColor}
            fontSize="30px"
            onClick={toggleTheme}
          />
        ) : (
          <LuSunMoon
            color={currentColor}
            fontSize="30px"
            onClick={toggleTheme}
          />
        )}

        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="#444d58"
        />

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
