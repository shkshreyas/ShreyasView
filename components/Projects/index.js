import React from 'react';
import Link from 'next/link';
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
                    Here are some of the projects I&apos;ve worked on recently
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
                link="https://github.com/shkshreyas/Swaraj_Quest"
                github="https://github.com/shkshreyas/Swaraj_Quest"
                reverse={true}
            />
        </section>
    );
}

function ProjectsCard({ name, tech, src, description, link, github, reverse }) {
    const { isMobile } = useBreakpoints();
    return (
        <Parallax
            speed={-5}
            className={`group border-4 shadow-lg rounded-xl border-transparent hover:border-sky-500 hover:dark:border-slate-400 hover:bg-sky-50 dark:hover:bg-slate-800/80 duration-300 ease-in-out transform hover:scale-105 transition ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } md:space-x-5 md:space-y-0 flex flex-col space-y-5 md:space-y-0 mx-auto md:mx-5 p-5`}
        >
            <Image className={`w-full max-w-xl rounded-lg`} src={src} alt={name} width={500} height={300} />
            <div className={`flex-1 flex flex-col justify-between`}>
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">{description}</p>
                </div>
                <div className="mt-3 flex gap-2">
                    <a href={link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center p-2 border-2 border-transparent rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700/40">
                        <FaExternalLinkAlt className="mr-2" /> Live
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center p-2 border-2 border-transparent rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/40">
                        <FaGithub className="mr-2" /> Code
                    </a>
                </div>
            </div>
        </Parallax>
    );
}

export default Projects;
