import { useState } from "react";
import bannerImage from "../assets/aboutpic.png"
const About = () => {

    const [data, setData] = useState({
        image: bannerImage,
        title: "Java and Front End Developer",
        desc1: `Proficient in Java programming encompassing Core Java fundamentals and adept in leveraging Spring Framework for developing robust and scalable applications.`,
        desc2: `Skilled in creating websites using HTML, CSS, and JavaScript along with React JS library`,
        action: {
            name: "Know More..",
            link: "https://www.linkedin.com/in/s-naveen45/",
        }
    })

    return (
        <>
            <div className="main-container py-12 bg-gray-100">
                <h1 className="text-4xl pb-16 underline text-center font-bold">About Me</h1>

                <div className="main flex items-center">
                    <div className="image w-full flex justify-center">
                        <img className="w-fit rounded-full" src={data.image} alt="Naveen" />
                    </div>
                    <div className="about w-full flex justify-center">
                        <div className="space-y-5 w-2/3">
                            <h1 className="text-4xl font-semibold">{data.title}</h1>
                            <p>{data.desc1}</p>
                            <p>{data.desc2}</p>
                            <br />
                            <a href={data.action.link} className="bg-orange-500 px-3 py-2 rounded-full shadow text-white">{data.action.name}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;