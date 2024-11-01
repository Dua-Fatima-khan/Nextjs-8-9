import Link from "next/link"
export default function FOOTER () {
    return  (
        <footer className="flex bg-gray-400  flex-col justify-center items-center p-5 gap-3 ">
            <p>Created by muhammad junaid </p>
            <h3 className="font-bold text-2xl text-[#063842] ">Quick links</h3>
            <ul className="flex gap-5 uppercase " >
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>Blog</li>
                <li>Services</li>
        
            </ul>
        </footer>
    )
}