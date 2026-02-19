import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface ProfileProps {
    name: string;
    title: string;
    bio: string;
    socials: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
    imageSrc?: string; // Optional image
}

export const Profile: React.FC<ProfileProps> = ({ name, title, bio, socials, imageSrc }) => {
    return (
        <div className="flex flex-col items-start gap-6 py-12">
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-24 h-24 rounded-full object-cover border border-gray-100"
                />
            )}
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                    {title}
                </p>
            </div>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {bio}
            </p>

            <div className="flex gap-4 text-gray-500">
                {socials.github && (
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                )}
                {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </a>
                )}
                {socials.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                )}
                {socials.email && (
                    <a href={`mailto:${socials.email}`} className="hover:text-black dark:hover:text-white transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                )}
            </div>
        </div>
    );
};
