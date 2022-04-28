import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center py-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font sm-:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello there, I'm Jesse.
                        <br className="hidden lg:inline-block" />I love write code and drink a lot of coffee.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a front-end developer (aspiring full-stack) with over two and a half years of professional working experience. 
                        I love trying out new frameworks and technologies and the feeling of figuring out problems that aren't easy to solve.

                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">
                            Work With Me                            
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work.    
                        </a>    
                    </div>    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img className="object-cover object-centered rounded pt-5 sm:pt-0" alt="hero" src="./Asset 21.png"></img>
                </div>
            </div>
        </section>
    );
}