import React from 'react';
import { Star } from 'lucide-react';

import jsIcon from '../assets/JavaScript.svg';
import pythonIcon from '../assets/Python.svg';
import htmlIcon from '../assets/HTML.svg';
import cssIcon from '../assets/CSS.svg';
import sqlIcon from '../assets/SQL.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/Express.svg';
import nestIcon from '../assets/Nest.js.svg';
import nodeIcon from '../assets/Node.js.svg';
import mysqlIcon from '../assets/SQL Developer.svg';
import awsIcon from '../assets/AWS.svg';
import mongoIcon from '../assets/MongoDB.svg';
import vercelIcon from '../assets/Vercel.svg';
import renderIcon from '../assets/11773545.png';
import dockerIcon from '../assets/Docker.svg';
import gitIcon from '../assets/Git.svg';
import githubIcon from '../assets/GitHub.svg';


type Skill = {
    name: string;
    icon: string;
    level: number;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillSections: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', icon: jsIcon, level: 5 },
            { name: 'Python', icon: pythonIcon, level: 2 },
            { name: 'HTML', icon: htmlIcon, level: 4 },
            { name: 'CSS', icon: cssIcon, level: 4 },
            { name: 'SQL', icon: sqlIcon, level: 5 },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React', icon: reactIcon, level: 5 },
            { name: 'Node.js', icon: nodeIcon, level: 5 },
            { name: 'Express.js', icon: expressIcon, level: 5 },
            { name: 'Nest.js', icon: nestIcon, level: 2 },
        ],
    },
    {
        title: 'Database Management',
        skills: [
            { name: 'MongoDB', icon: mongoIcon, level: 2 },
            { name: 'MySQL', icon: mysqlIcon, level: 5 },
        ],
    },
    {
        title: 'Cloud Services',
        skills: [
            { name: 'AWS', icon: awsIcon, level: 3 },
            { name: 'Vercel', icon: vercelIcon, level: 3 },
            { name: 'Render', icon: renderIcon, level: 3 },
        ],
    },
    {
        title: 'Other Tools',
        skills: [
            { name: 'Docker', icon: dockerIcon, level: 4 },
            { name: 'Git', icon: gitIcon, level: 5 },
            { name: 'Github', icon: githubIcon, level: 5 },
        ],
    },
];


const SkillsSection: React.FC = () => {
    return (

        <section id="skills" className="py-30 px-40 bg-base-100 text-base-content">
            <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>

            {skillSections.map((category) => (
                <div key={category.title} className="mb-10">
                    <h3 className="text-xl font-semibold mb-4 px-6 text-center text-primary">{category.title}</h3>
                    <div className="w-76 h-1 bg-primary mx-auto mb-4 rounded"></div>
                    <div className="flex gap-10 p-4 md:px-12 overflow-x-auto scroll-smooth justify-center">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center p-4 rounded-xl shadow-md bg-base-200 hover:scale-105 transition-transform"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                                <p className="font-medium mb-1">{skill.name}</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) =>
                                        i < skill.level ? (
                                            <Star key={i} className="text-yellow-600 fill-amber-600" />
                                        ) : (
                                            <Star key={i} className="text-gray-400" />
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillsSection;
