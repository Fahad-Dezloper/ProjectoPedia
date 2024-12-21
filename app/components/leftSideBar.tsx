import Link from "next/link"
import Account from "./Account"

const LeftSideBar = () => {
    const links = [{name: "Search", link: "/search"},{name: "Saved", link: "/saved"},{name: "Add", link: "/add"}, ]

    return (
        <div className="w-[25vw] bg-gray-100 p-8 h-screen shadow-lg flex flex-col gap-8">
            <h1 className="font-primary text-4xl font-black">ProjectoPedia</h1>
            <div className="flex flex-col gap-2 font-secondary">
                {links.map((item, index) => (
                    <Link key={index} href={item.link} className="p-4 hover:bg-blue-300 duration-200 rounded-md">{item.name}</Link>
                ))}
            </div>
            <div className="flex h-full items-end"><Account /></div>
        </div>
    )
}

export default LeftSideBar