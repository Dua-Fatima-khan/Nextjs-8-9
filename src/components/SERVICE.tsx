export default function Services(){
    return(
        <div className="services h-[100%] w-full p-10 flex justify-center items-center flex-col  ">
            <h2 className="text-4xl font-bold  italic" >My Services </h2>
   <div className=" w-full p-5 flex items-center justify-center gap-5 flex-wrap  " >
   <div className="bg-purple-400 w-[350px] p-5 flex flex-col items-start gap-4 border border-black rounded-2xl "  > 
    <h3 className="text-2xl font-bold " >Web Development</h3>
    <p className="text-justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio aliquid maiores at doloribus unde doloremque natus possimus libero illum!!</p>
    <button className="bg-black px-5 py-2 border rounded-lg text-white " >Contact me</button>
</div>
<div className="bg-purple-400 w-[350px] p-5 flex flex-col items-start gap-4 border border-black rounded-2xl "  > 
    <h3 className="text-2xl font-bold " >Web Designing</h3>
    <p className="text-justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio aliquid maiores at doloribus unde doloremque natus possimus libero illum!!</p>
    <button className="bg-black px-5 py-2 border rounded-lg text-white " >Contact me</button>
    
</div>
<div className="bg-purple-400 w-[350px] p-5 flex flex-col items-start gap-4 border border-black rounded-2xl "  > 
    <h3 className="text-2xl font-bold " >Graphic desgining</h3>
    <p className="text-justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio aliquid maiores at doloribus unde doloremque natus possimus libero illum!!</p>
    <button className="bg-black px-5 py-2 border rounded-lg text-white " >Contact me</button>
</div>
   </div>


        </div>
    )
}