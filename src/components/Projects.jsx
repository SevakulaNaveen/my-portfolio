const Projects = () => {
    return (
        <>
            <div className="main-container py-12">
                <h1 className="text-4xl font-bold text-center underline">My Projects</h1>

                <div className="service-container  flex space-x-5 px-10 mt-10">
                    <div className="bg-slate-100 hover:bg-gray-100 text-center p-5 shadow-lg rounded-xl cursor-pointer  service1 space-y-4">
                        <h1 className="text-4-xl">SESPHR</h1>
                        <p>This Project aims to develop a secure and efficient system for sharing personal health records (PHRs) in Cloud</p>
                        <br />
                        <a href="https://github.com/SevakulaNaveen/SESPHR" className="px-3 py-2 bg-orange-500 text-white rounded-full shadow-lg">Check</a>
                    </div>
                    <div className="bg-slate-100 hover:bg-gray-100 text-center  cursor-pointer p-5 shadow-lg rounded-xl service2 space-y-4">
                        <h1 className="text-4-xl">Product CRUD</h1>
                        <p>The Product CRUD App is a Spring MVC and Spring ORM-based application designed to manage product information efficiently.</p>
                        <br />
                        <a href="https://github.com/SevakulaNaveen/product_crud" className="px-3 py-2 bg-orange-500 text-white rounded-full shadow-lg">Check</a>
                    </div>
                    <div className="bg-slate-100 hover:bg-gray-100 text-center cursor-pointer p-5 shadow-lg rounded-xl service3 space-y-4">
                        <h1 className="text-4-xl">Myntra Clone</h1>
                        <p>A Myntra clone developed using React and Bootstrap, replicating the core UI components and design patterns of Myntra's platfom</p>
                        <br />
                        <a href="https://github.com/SevakulaNaveen/MyntraClone" className="px-3 py-2 text-white bg-orange-500 rounded-full shadow-lg">Check</a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Projects;