import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Parallax } from 'react-scroll-parallax';
import useBreakpoints from '../../hooks/useBreakpoint';
import Image from 'next/image';

function Projects() {
    return (
        <section id="work" className='text-center space-y-8 p-5 md:p-10 justify-center items-center bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300 w-full'>
            <div className="md:py-4">
                <a className="
                    animated-underline md:after:bg-sky-700 md:dark:after:bg-slate-300 
                    tracking-wide hover:tracking-widest duration-300 transform ease-in-out
                    md:after:h-1 text-center text-5xl font-bold link-glow">
                    My Works
                </a>
                <p className='mt-3 md:text-lg'>
                    Here are some of the projects I've worked on recently
                </p>
            </div>

            <ProjectsCard
                name={<>Aditi AI<span className="text-base ml-1 capitalize">AI Assistant App</span></>}
                tech={["Kotlin", "Jetpack Compose", "Android Studio", "Gemini API"]}
                src="/projects/aditi-ai.png"
                description={`Created an AI-powered assistant app with voice recognition and image processing capabilities. Leveraged Kotlin and Jetpack Compose for a modern, responsive UI in Android Studio. Integrated the Gemini API for advanced AI functionalities and focused on efficient memory and storage management, including accessibility features for enhanced usability.`}
                link="https://github.com/shkshreyas/Aditi_AI/raw/main/app/release/app-release.apk"
                github="https://github.com/shkshreyas/Aditi_AI"
            />

            <ProjectsCard
                name={<>DhanGyan<span className="text-base ml-1 capitalize">Financial Literacy Platform</span></>}
                tech={["Flutter", "Firebase"]}
                src="/projects/dhangyan.png"
                description={`Developed a comprehensive financial literacy platform that empowers users with essential financial knowledge. Features include course creation, a finance-based AI chat app, and a freemium model with sponsorship options. Utilized Flutter for the frontend and Firebase for secure authentication and scalable backend services.`}
                link="https://github.com/shkshreyas/DhanGyan"
                github="https://github.com/shkshreyas/DhanGyan"
                reverse={true}
            />

            <ProjectsCard
                name={<span className='capitalize'>Swaraj Quest<span className="text-base ml-1 capitalize">Quiz App</span></span>}
                tech={["React.js", "Tailwind CSS", "Firebase"]}
                src="/projects/swaraj-quest.png"
                description={`Developed a quiz app focused on Indian freedom fighters. Features include multiple quizzes, interactive elements, and a reward system with coins. Leveraged React.js and Firebase for a responsive and dynamic user experience.`}
                link="https://www.amazon.com/dp/B0DDQJZ1JF/ref=apps_sf_sta"
                github="https://www.amazon.com/dp/B0DDQJZ1JF/ref=apps_sf_sta"
            />
            <ProjectsCard
                reverse={true}
                name={<>Smarty Party<span className="text-base ml-1 capitalize">Quiz Application</span></>}
                tech={["Kotlin", "Android Studio", "XML", "Firebase"]}
                src="/projects/smarty-party.png"
                description={`Developed an engaging quiz application with a focus on interactivity and real-time updates. Utilized Kotlin and Android Studio for development, designing the user interface in XML and integrating Firebase for backend functionalities. The app delivers a responsive and immersive user experience.`}
                link="https://github.com/shkshreyas/Smarty-Party"
                github="https://github.com/shkshreyas/Smarty-Party"
            />

            <ProjectsCard
                name={<>Portfolio App<span className="text-base ml-1 capitalize">Kotlin Android Studio</span></>}
                tech={["Kotlin", "Android Studio", "XML", "Firebase"]}
                src="/projects/portfolio-app.png"
                description={`Developed a personal portfolio app using Kotlin and Android Studio, with a sleek UI designed in XML. Integrated Firebase for backend functionalities, including user authentication and data storage. The app showcases projects and skills with a user-friendly interface and smooth performance.`}
                link="https://github.com/shkshreyas/PortfolioApk/raw/master/app/release/app-release.apk"
                github="https://github.com/shkshreyas/PortfolioApk"
            />


            <Link href="https://github.com/shkshreyas">
                <a target="_blank" className='text-xl'>To see more, head over to my <span className="inline-flex gap-2 items-center font-semibold italic cursor-pointer ease-in-out duration-300 hover:text-sky-800 hover:dark:text-sky-300">
                    Github profile!
                    <FaGithub />
                </span></a>
            </Link>
        </section>
    )
}

export default Projects;

function ProjectsCard(props) {
    const { isXs, isSm, isMd } = useBreakpoints();
    return (
        <div className="text-start md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10">
            <div className='flex flex-col gap-5 md:gap-0 md:max-w-sm md:px-10 lg:max-w-md xl:max-w-xl group mx-auto md:flex-row items-center justify-center
                border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50 ease-in-out dark:border-slate-500/50
                transform-color ease-liner p-3 md:p-5 rounded-xl backdrop-blur
                md:border-none md:bg-none'>
                <div className={`flex-auto ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"} -z-10 w-auto md:p-0`}>
                    <img src={props.src} alt={props.name}
                        className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0"
                    />
                </div>
                <div className={`min-w-fit order-first ${props.reverse ? "md:order-first md:translate-x-10" : "md:text-end md:order-2 md:-translate-x-10"}`}>
                    <Parallax speed={isXs || isSm ? 0 : 10} className="space-y-2">
                        <Link href={props.link ? props.link : props.github}>
                            <a target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase tracking-wider md:order-2">{props.name}</a>
                        </Link>
                        <div className='gap-3 md:tracking-wide inline-flex justify-start flex-wrap text-sm'>
                            {props.tech.map((ele, i) => <a className='whitespace-nowrap dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' key={i}>{ele}</a>)}
                        </div>
                        <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                            md:border-2 border-sky-700/20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70 ease-in-out dark:border-slate-500/50
                            transform ease-liner text-justify md:p-5 rounded-xl mx-auto md:backdrop-blur-md`}>
                            {props.description}
                        </div>
                        <div className="inline-flex gap-3 pt-3 text-2xl">
                            {props.github &&
                                <Link href={props.github}>
                                    <a target="_blank">
                                        <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300" />
                                    </a>
                                </Link>
                            }
                            {props.link &&
                                <Link href={props.link}>
                                    <a target="_blank">
                                        <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300" />
                                    </a>
                                </Link>
                            }
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    )
}
