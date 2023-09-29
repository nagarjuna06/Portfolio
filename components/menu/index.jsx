import { navList } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMoon, BiSun } from "react-icons/bi";
import { MdMenu } from "react-icons/md";

const Menu = ({ theme, setTheme, pathname }) => {
  const router = useRouter();
  return (
    <div className="phone:block laptop:hidden tablet:hidden">
      <label htmlFor="my_modal_7" className="btn btn-sm">
        <MdMenu className="text-2xl" />
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal modal-top">
        <div className="modal-box text-sm p-0">
          <ul className="menu rounded-box font-medium text-gray-400">
            {navList.map((each) => (
              <li
                key={each.name}
                className={
                  pathname === each.route
                    ? "bg-blue-400 rounded-lg text-white"
                    : ""
                }
                onClick={() => router.push(each.route)}
              >
                <label htmlFor="my_modal_7" className="flex gap-3 items-center">
                  <each.icon className="text-lg" />
                  <p>{each.name}</p>
                </label>
              </li>
            ))}
            <li onClick={setTheme}>
              <div>
                {theme ? (
                  <>
                    <BiSun className="text-yellow-400 text-lg" /> light
                  </>
                ) : (
                  <>
                    <BiMoon className="text-white text-lg" /> dark
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Menu;
