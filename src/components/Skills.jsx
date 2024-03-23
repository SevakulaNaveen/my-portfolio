import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
    return (
        <>
            <div className="mt-2">
                <h1 className=" mb-16 text-4xl font-bold underline  text-center">
                    My Skills
                </h1>
                {/* box section */}

                <div
                    style={{
                        backgroundImage: `url(${bannerBackground})`,
                        backgroundSize: "cover",
                    }}
                    className="box-container items-center flex py-16"
                >
                    <div className="flex text-white justify-center">
                        {/* text container */}
                        <div className="w-2/3 text-center space-y-4">
                            <h1 className="text-4xl font-bold">I love these technologies</h1>
                            <p>
                                Passionate about Java and Spring for building powerful applications, adept in MySQL for efficient data management. On the front-end, skilled in JavaScript and React.js, creating captivating user interfaces.
                            </p>
                            <br />
                            <a href="https://www.linkedin.com/in/s-naveen45/" className=" text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg">
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* skills container */}

                        <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                                Core Java
                            </p>

                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Python
                            </p>

                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Java Script
                            </p>

                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                MySQL
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                MongoDB
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                JDBC
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Linux
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Bash Scripting
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                AWS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Docker
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Spring
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Hibernate
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Node.js
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Express.js
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                ReactJS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                HTML
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                CSS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Tailwind CSS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                Bootstrap
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Expertise;
