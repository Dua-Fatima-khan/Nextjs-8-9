import Link from "next/link"
export default function Header(){
    return(
        <nav className="bg-purple-200 w-full h-20 flex justify-between items-center px-10 " >
            <div className="text-3xl font-black" >MJ.</div>
            <ul className="flex gap-5 uppercase " >
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>Services</li>
        
            </ul>
            <div>
                <button className="bg-black px-5 py-2 border border-white rounded-lg text-white " >
                Contact
                </button>
                <button className="bg-black px-5 py-2 border border-white rounded-lg text-white " >
        SignUp
                </button>
            </div>
        </nav>
    )
}