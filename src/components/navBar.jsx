import Link from "next/link";
import SearchFunctionalty from "./searchFunctionalty";

export default function NavBar() {
  const navLinks = [
    { navName: "formValidation", link: "form" },
    { navName: "counter", link: "counter" },
  ];

  return (
    <>
      <header className="text-white bg-white p-2 ">
        <nav className=" flex gap-4  justify-start items-center  text-black ">
          <div className=" flex gap-4  text-black">
            {navLinks &&
              navLinks?.map((value, index) => (
                <Link href={`/${value?.link}`} className=" cursor-pointer p-2" key={index}>
                  <li>{value.navName}</li>
                </Link>
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
