import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    link: string;
}

interface ProjectListProps {
    title?: string;
    projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ title = "Projects", projects }) => {
    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={20} />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
};
