import { Link } from "react-router-dom";
import SearchFunctionalty from "./searchFunctionalty";

export default function NavBar() {
  const navLinks = [
        { navName: "Home", link: "" },

    { navName: "formValidation", link: "form" },
    { navName: "counter", link: "counter" },
  ];

  return (
    <>
      <header className="text-white bg-black p-2 ">
        <nav className=" flex gap-4  justify-start items-center ">
          <div className=" flex gap-4  font-medium font-sans text-white">
            {navLinks &&
              navLinks?.map((value, index) => (
                <ul key={value?.link}>
                <Link to={`/${value?.link}`} className=" cursor-pointer p-2" key={index}>
                  <li>{value.navName}</li>
                </Link>
              </ul>
              ))}
          </div>
          <div className="flex  items-center">
            <SearchFunctionalty />
          </div>
        </nav>
      </header>
    </>
  );
}
