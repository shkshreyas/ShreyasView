import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

function About() {
    return (
        <div id="about" className='relative overflow-x-hidden p-5 md:p-10 justify-center items-center w-full bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300'>
            <div className="py-8 md:py-4 text-center">
                <a className="
                animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
                tracking-wide hover:tracking-widest duration-300 transform ease-in-out
                md:after:h-1  text-center text-5xl font-bold link-glow">
                    About Me
                </a>
            </div>
            <div className="text-start  md:text-lg  group space-y-6 md:space-y-8 md:p-10">
                <Fade>
                    <div className="
                    border-2 border-sky-600/50 hover:bg-gradient-to-l from-cyan-200/40 to-pink-100/40 dark:from-slate-900/10 dark:to-blue-900/10   ease-in-out  dark:border-slate-500/50
                    md:group-hover:-translate-x-10 transform-color ease-liner delay-100 duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                        Shreyas Kumar is a passionate developer and researcher with a deep focus on artificial intelligence and machine learning. His journey began with a fascination for creating technology-driven solutions, leading him to explore various fields, including app development and machine learning. Shreyas is particularly dedicated to research in AI and ML, where he continually pushes the boundaries to develop innovative, data-driven applications. His commitment to learning and exploration has also led him to advance his skills in web development. Shreyas&apos;s work is driven by a desire to contribute to tech communities and make impactful advancements in AI and machine learning.
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div className="  delay-100
                    border-2 border-sky-600/50 hover:bg-gradient-to-l from-cyan-200/40 to-pink-100/40 dark:from-slate-900/10 dark:to-blue-900/10   ease-in-out  dark:border-slate-500/50
                    md:group-hover:translate-x-10 transform-color ease-liner  duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                        Fast-forward to today, Shreyas Kumar is a skilled AI and ML developer with a strong foundation in app and web development. He specializes in creating AI-driven applications and full-stack web solutions using cutting-edge technologies like React JS, Next JS, and Flutter. Currently, Shreyas focuses on projects like AI, contributing to open-source, and exploring emerging technologies like blockchain and the metaverse. His passion for innovation and continuous learning keeps him at the forefront of technological advancement.
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="z-10 flex flex-wrap  justify-start md:justify-evenly mt-10">
                <Slide direction="left">
                    <div>
                        <div className="md:py-4">
                            <a className="
            md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-3xl font-bold link-glow">
                                Experience
                            </a>
                        </div>
                        <ol className="  border-l relative mt-10 border-slate-300 dark:border-slate-600">
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">Jun 2024 - July 2024</time>
                                <h3 className="text-lg font-semibold">CHAKARALAYA ANALYTICS PVT LTD</h3>
                                <p className="text-base font-norm opacity-75">Machine Learning Intern</p>
                            </li>
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">May 2024 - July 2024</time>
                                <h3 className="text-lg font-semibold">SpectoV PVT Limited</h3>
                                <p className="text-base font-norm opacity-75">App Developer Intern</p>
                            </li>
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">June 2024 - July 2024</time>
                                <h3 className="text-lg font-semibold">Centre for Cyber Physical Systems (CCPS)</h3>
                                <p className="text-base font-norm opacity-75">Summer Research Intern</p>
                            </li>
                        </ol>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div>
                        <div className="md:py-4">
                            <a className="
              md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-3xl font-bold link-glow">
                                Education
                            </a>
                            <span className="h-1 bg-black w-full min-w-max"></span>
                        </div>
                        <ol className="  border-l relative mt-10 border-slate-300 dark:border-slate-600">
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2023 - Present</time>
                                <h3 className="text-lg font-semibold">B.E (Computer Science and Engineering)</h3>
                                <p className="text-base font-norm opacity-75">Vellore Institute Of Technology, Chennai</p>
                                <p className="text-sm font-norm opacity-75">Recent CGPA: -/10</p>
                            </li>
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2018 - 2020</time>
                                <h3 className="text-lg font-semibold">Pre-University Education</h3>
                                <p className="text-base font-norm opacity-75">Bridgewell Global School, Sarakana, Bhubaneswar</p>
                                <p className="text-sm font-norm opacity-75">Aggregate percentage: -%</p>
                            </li>
                        </ol>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default About;
