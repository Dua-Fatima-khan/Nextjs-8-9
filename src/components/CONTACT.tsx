import Image from "next/image"
export default function Contact(){
    return(
      <section className=" flex flex-col items-center justify-center  p-5"  >
          <h2 className="text-3xl font-bold uppercase" >contact me</h2>
        <div className=" w-full p-5 flex items-center justify-center gap-5 flex-wrap  " >
            <div className=" flex flex-col items-center justify-center" >
                <Image  alt="" src={'/icon1.png'} height={100} width={100 }/>
                <button className="bg-black px-5 py-2 border rounded-lg text-white " >Follow</button>
            </div>
            <div className=" flex flex-col items-center justify-center" >
                <Image  alt="" src={'/icon2.png'} height={100} width={100 }/>
                <button className="bg-black px-5 py-2 border rounded-lg text-white " >Follow</button>
            </div>
            <div className=" flex flex-col items-center justify-center" >
                <Image  alt="" src={'/icon3.png'} height={100} width={100 }/>
                <button className="bg-black px-5 py-2 border rounded-lg text-white " >Follow</button>
            </div>
        </div>
      </section>
    )
}