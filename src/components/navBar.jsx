export default function NavBar(){

        const navLinks = [
              {  navName:"SearchFunction" , link:"search"},
                        {        navName:"counter" , link:"counter"},


        ]

    return (
        <>  
    <header className="text-white bg-white ">
            <nav className=" flex gap-4  text-black " >
            { navLinks&& navLinks?.map((value , index)=>(

            
            <ul className=" cursor-pointer p-2" key={index}>
                    <li > 
                       { value.navName}
                    </li>
            </ul>         ) )  }



            </nav>


    </header>


        </>
    )
}