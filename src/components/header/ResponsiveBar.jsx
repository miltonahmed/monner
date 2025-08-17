import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MenuData } from "../../utils/Header/MenuData";

const ResponsiveBar = ({ showBars, setShowBars }) => {
  return (
    <div
      className={`min-w-[320px] h-full bg-navBg/80  px-6 py-18 fixed top-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        showBars ? 'translate-x-0' : 'translate-x-full'
      }
      `}
    >
      {/* close icons  */}

      <IoClose
        onClick={() => setShowBars(false)}
        className="text-2xl text-white absolute left-5 top-5 cursor-pointer "
      />

      {/* Menu  */}
      <ul className="flex flex-col gap-y-5 ">
        {MenuData.map(item => (
          <li key={item.id}>
            {/* Menu link  */}
            <NavLink
              to={item.path}
              className="text-white text-base font-bold font-lato capitalize leading-6 tracking-[0.7px] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:transition-transform after:duration-300 hover:after:scale-x-100 after:scale-x-0 navItemHover hover:font-black"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveBar