import bannerImage from "../assets/picture.png"
import bannerBackground from "../assets/banner_wallpaper.svg"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Banner = () => {
    const ele = useRef(null);
    useEffect(() => {
        const typed = new Typed(ele.current, {
            strings: [
                "Java ",
                "Spring Framework",
                "Java Script",
                "React JS",
                "MySQL Database"
            ],
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 100,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover"
            }} className="main-container flex items-center">

                <div className="left w-full flex items-center justify-center text-white  ">
                    <div className="w-2/3 space-y-3  ms-10">

                        <h3 className=" text-2xl font-semibold  ">Hi, I am</h3>
                        <h1 className="text-4xl font-bold">Shevakula Naveen</h1>
                        <h2 className=" text-2xl ">And I am Proficent in <span className="font-bold underline" ref={ele}></span></h2>
                        <p className="">
                            Aspiring MCA fresher with a strong foundation in software engineering, eager to contribute technical expertise and collaborate on impactful projects within the software development sphere.
                        </p>
                        <div className="icons-container flex space-x-5">
                            <a href="https://www.linkedin.com/in/s-naveen45/" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800" >
                                <i className="fa-brands  text-4xl  fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/SevakulaNaveen" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800 ">
                                <i className="fa-brands  text-4xl fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/im.naveen_45/" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800 ">
                                <i className="fa-brands text-4xl  fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/stranger_4_5" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800 ">
                                <i className="fa-brands text-4xl  fa-x-twitter"></i>
                            </a>
                        </div>
                        <br />
                        <a href="https://www.linkedin.com/in/s-naveen45/" className="px-3 py-2 bg-orange-500 rounded-full shadow-lg ">Contact Me</a>
                    </div>

                </div>
                <div className="right  w-full flex justify-center">
                    <img className="rounded-full my-2 shadow-lg w-fit " src={bannerImage} alt="" />
                </div>
            </div>
        </>
    )
}
export default Banner;