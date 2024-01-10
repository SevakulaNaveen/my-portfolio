import { useState } from "react";

const Header = () => {
    const [name, setName] = useState("Shevakula Naveen")
    const [menuItems, setMenuItems] = useState([{
        name: "Home",
        link: "/home",
        id: 1,
    },
    {
        name: "About",
        link: "/about",
        id: 2,
    },
    {
        name: "Skills",
        link: "/skills",
        id: 3,
    }, {
        name: "Portfolio",
        link: "/portfolio",
        id: 4,
    }, {
        name: "Contact",
        link: "/contact",
        id: 5,
    }])
    // const handleDownload = () => {
    //     const resumePath = '/Naveen_Resume.pdf';

    //     // Open the PDF file in a new window or tab
    //     window.open(resumePath, '_blank');
    // };
    return (
        <>
            <div className="h-20 border main flex justify-between items-center bg-gray-100 px-16">
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                </div>
                <div className="space-x-6">

                    {menuItems.map((items) => <a href={items.link} className="hover:text-orange-600" key={items.id}>{items.name}</a>)}
                </div>
                <div>
                    {/* <button onClick={handleDownload} className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-white ">Download CV</button> */}
                    <a href="https://drive.google.com/file/d/1S0Lvf0ouDtCiaUgy4rblW242V_sz-0Ad/view?usp=drive_link" className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-white ">Download CV</a>
                </div>
            </div>
        </>
    )
}
export default Header;