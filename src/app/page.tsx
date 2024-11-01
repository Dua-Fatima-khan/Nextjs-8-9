import Hero from "@/components/HERO";
import Services from "@/components/SERVICE"
import Contact from "@/components/CONTACT";
export default function Home() {
  return (
    <main>
      
<Hero/>
<Services />
<Contact/>
      {/* <div className="w-full h-[100vh] " >


        <div className="border border-black rounded shadow-2xl w-[400px] p-10 flex flex-col gap-2 m-10" >
          <Image src={'/image.png'} alt=" " width={300} height={200} />
          <h1 className="font-black text-2xl " > Laptop </h1>
          <div className="price flex gap-5" >
            <p className="font-bold" >$500 </p>
            <p className="text-red-900 line-through">$900</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores soluta minus quibusdam nesciunt voluptatibus minima enim qui nihil impedit esse porro fugiat numquam, eum commodi et reiciendis ipsam deleniti. Natus.</p>
          <button className="bg-black px-5 py-2 border border-white rounded-lg text-white" >View Product</button>
        </div>

      </div> */}
    </main>
  );
}
