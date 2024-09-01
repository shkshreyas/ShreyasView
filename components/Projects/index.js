import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Parallax } from 'react-scroll-parallax';
import useBreakpoints from '../../hooks/useBreakpoint';
import Image from 'next/image';
import Link from 'next/link';

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
                {/* Corrected text to escape single quotes */}
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

function ProjectsCard({ name, tech, src, description, link, github, reverse }) {
    return (
        <Parallax className="custom-class" y={[-20, 20]}>
            <Fade direction={reverse ? "right" : "left"} triggerOnce duration={500}>
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-5`}>
                    <div className="relative w-full md:w-1/2 h-64 md:h-96 transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Image
                            src={src}
                            alt={name}
                            width={500}  // Replace with actual width
                            height={300} // Replace with actual height
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-3xl font-semibold">{name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {tech.map((techItem, index) => (
                                <span key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg px-2 py-1 text-sm">
                                    {techItem}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-3">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                                View Project <FaExternalLinkAlt />
                            </a>
                            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                GitHub <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </Parallax>
    );
}
