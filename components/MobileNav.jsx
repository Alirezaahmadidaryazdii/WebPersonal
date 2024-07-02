"use client"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]
export default function MobileNav() {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent-DEFAAULT" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div>logo</div>
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">luke <span className="text-accent-DEFAAULT">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=>{
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-DEFAAULT border-b-2 border-accent-DEFAAULT"}text-xl capitalize hover:text-accent-hover transition-all`}>{link.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}
