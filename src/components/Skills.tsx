import React from 'react';
import { Star } from 'lucide-react';

import { svgIcons } from '../staticAssets/images.ts';

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
            { name: 'JavaScript', icon: svgIcons?.javaScript, level: 5 },
            { name: 'TypeScript', icon: svgIcons?.ts, level: 5 },
            { name: 'Python', icon: svgIcons?.python, level: 2 },
            { name: 'HTML', icon: svgIcons?.html, level: 4 },
            { name: 'CSS', icon: svgIcons?.CSS, level: 4 },
            { name: 'SQL', icon: svgIcons?.sql, level: 5 },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React', icon: svgIcons?.react, level: 5 },
            { name: 'Node.js', icon: svgIcons?.nodeJs, level: 5 },
            { name: 'Express.js', icon: svgIcons?.express, level: 5 },
            { name: 'Nest.js', icon: svgIcons?.nest, level: 3 },
            { name: 'Sequelize', icon: svgIcons?.sequelize, level: 5 },
            { name: 'Mongoose', icon: svgIcons?.mongoose, level: 3 },
            { name: 'Tailwind', icon: svgIcons?.tailwind, level: 3 },
            { name: 'Redux', icon: svgIcons?.redux, level: 3 },
        ],
    },
    {
        title: 'Database Management',
        skills: [
            { name: 'MongoDB', icon: svgIcons?.mongoDB, level: 4 },
            { name: 'MySQL', icon: svgIcons?.sqlDB, level: 5 },
            { name: 'Redis', icon: svgIcons?.redis, level: 5 },
        ],
    },
    {
        title: 'Cloud Services',
        skills: [
            { name: 'AWS', icon: svgIcons?.aws, level: 3 },
            { name: 'Vercel', icon: svgIcons?.vercel, level: 3 },
            { name: 'Render', icon: svgIcons?.render, level: 3 },
        ],
    },
    {
        title: 'Other Tools',
        skills: [
            { name: 'Docker', icon: svgIcons?.docker, level: 4 },
            { name: 'Git', icon: svgIcons?.git, level: 5 },
            { name: 'Github', icon: svgIcons?.gitHub, level: 5 },
            { name: 'PostMan', icon: svgIcons?.postman, level: 5 },
            { name: 'Slack', icon: svgIcons?.slack, level: 5 },
            { name: 'Jira', icon: svgIcons?.jira, level: 5 },
            { name: 'Jenkins', icon: svgIcons?.jenkins, level: 4 },
        ],
    },
];


const SkillsSection: React.FC = () => {
    return (

        <section id="skills" className="px-4 sm:px-6 md:px-12 lg:px-20 bg-base-100 text-base-content">
            <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>

            {skillSections.map((category) => (
                <div key={category.title} className="mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                    <div className="w-100 h-0.5 bg-secondary-content mx-auto mb-4 "></div>

                    <div className="carousel carousel-center rounded-box w-full gap-6 justify-center p-4">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex-shrink-0 flex flex-col items-center p-3 min-w-[120px] rounded-xl shadow-md bg-base-200 hover:scale-105 transition-transform"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                                <p className="font-medium mb-1 text-center">{skill.name}</p>
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
