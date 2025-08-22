import SearchFunctionalty from "./searchFunctionalty";

export default function NavBar() {
  const navLinks = [
    { navName: "SearchFunction", link: "search" },
    { navName: "counter", link: "counter" },
  ];

  return (
    <>
      <header className="text-white bg-white p-2 ">
        <nav className=" flex gap-4  justify-start items-center  text-black ">
          <div className=" flex gap-4  text-black">
            {navLinks &&
              navLinks?.map((value, index) => (
                <ul className=" cursor-pointer p-2" key={index}>
                  <li>{value.navName}</li>
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
