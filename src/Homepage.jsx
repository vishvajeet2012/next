export default function Homepage (){

    return (
        <>
            <div className=" h-screen p-4 bg-black text-white">
                    <div className="max-w-7xl mx-auto ">
                    <h1 className="text-center font-bold  capitalize  text-7xl">
        Vishvajeet Shukla
                    </h1>   
                    <div className="flex justify-center font-medium items-center w-max-4xl mx-auto my-10 ">

<p className="text-gray-500"> <span className="text-white">MERN Stack Developer</span> passionate about clean UIs, scalable backends, fitness, languages, and creative ventures.</p>

                    </div>
                        <div className="flex justify-center flex-row gap-4">
                        <button className="bg-white text-black transition-all cursor-pointer hover:text-white hover:border hover:bg-black duration-300 rounded-md px-6 rounded-md py-2">Hire Me</button>
                        <button className="border transition-all duration-300 cursor-pointer rounded-md hover:bg-gray-900 px-6 py-2 ">Portfolio</button>
                    </div>
                    </div>

                


            </div>


        </>
    )
}