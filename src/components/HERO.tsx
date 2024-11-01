import Image from "next/image"
export  default function  Hero(){

    return(
        <section className="p-20 bg-red-300 flex justify-center items-center gap-20 flex-wrap " >
            <div>
                <Image src={'/image.png'} alt="image" width={500} height={500}  className="rounded-lg " />
            </div>
            <div className="flex flex-col   gap-5 
            lg:w-[30%]
            md:w-[80%]
            sm:w-[100%] " >
                <p className=" text-1xl font-bold  " >Hello I am</p>
                <h1 className="text-5xl font-black  " >Muhammad Junaid</h1>
                <p className="text-justify " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab ex consequatur, alias sequi beatae. Reiciendis debitis facilis asperiores adipisci. Minus voluptate sit corrupti adipisci, eaque aliquam a et rem.</p>
                <div  className="flex gap-5">

                    <button className=" bg-black px-5 py-1 border rounded  " >Resume</button>
                    <button className="  px-5 py-1 border rounded  " >Hire me</button>
                </div>
            </div>
        </section>
    )
}