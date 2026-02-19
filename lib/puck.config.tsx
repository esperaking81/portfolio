import type { Config } from "@measured/puck";
import { Profile } from "@/components/Profile";
import { ProjectList } from "@/components/ProjectList";
import { WritingList } from "@/components/WritingList";

type Props = {
    Profile: {
        name: string;
        title: string;
        bio: string;
        imageSrc: string;
        githubUrl: string;
        twitterUrl: string;
        linkedinUrl: string;
        email: string;
    };
    ProjectList: {
        title: string;
        projects: { title: string; description: string; link: string }[];
    };
    WritingList: {
        title: string;
        posts: { title: string; date: string; link: string }[];
    };
    VerticalSpace: { size: string };
};

export const config: Config<Props> = {
    components: {
        Profile: {
            fields: {
                name: { type: "text" },
                title: { type: "text" },
                bio: { type: "textarea" },
                imageSrc: { type: "text" },
                githubUrl: { type: "text" },
                twitterUrl: { type: "text" },
                linkedinUrl: { type: "text" },
                email: { type: "text" },
            },
            defaultProps: {
                name: "Evan You",
                title: "Developer",
                bio: "Creator of Vue.js",
                imageSrc: "https://github.com/yyx990803.png",
                githubUrl: "https://github.com/yyx990803",
                twitterUrl: "https://twitter.com/youyuxi",
                linkedinUrl: "",
                email: "",
            },
            render: ({ name, title, bio, imageSrc, githubUrl, twitterUrl, linkedinUrl, email }) => (
                <Profile
                    name={name}
                    title={title}
                    bio={bio}
                    imageSrc={imageSrc}
                    socials={{
                        github: githubUrl,
                        twitter: twitterUrl,
                        linkedin: linkedinUrl,
                        email: email,
                    }}
                />
            ),
        },
        ProjectList: {
            fields: {
                title: { type: "text" },
                projects: {
                    type: "array",
                    arrayFields: {
                        title: { type: "text" },
                        description: { type: "textarea" },
                        link: { type: "text" },
                    },
                },
            },
            defaultProps: {
                title: "Projects",
                projects: [
                    { title: "Vue.js", description: "The Progressive JavaScript Framework", link: "https://vuejs.org" },
                    { title: "Vite", description: "Next Generation Frontend Tooling", link: "https://vitejs.dev" },
                ],
            },
            render: ({ title, projects }) => (
                <ProjectList title={title} projects={projects} />
            ),
        },
        WritingList: {
            fields: {
                title: { type: "text" },
                posts: {
                    type: "array",
                    arrayFields: {
                        title: { type: "text" },
                        date: { type: "text" },
                        link: { type: "text" },
                    },
                },
            },
            defaultProps: {
                title: "Writing",
                posts: [
                    { title: "State of Vue 2024", date: "Jan 1, 2024", link: "#" },
                ],
            },
            render: ({ title, posts }) => (
                <WritingList title={title} posts={posts} />
            ),
        },
        VerticalSpace: {
            fields: {
                size: {
                    type: "select",
                    options: [
                        { label: "Small", value: "24px" },
                        { label: "Medium", value: "48px" },
                        { label: "Large", value: "96px" },
                    ],
                },
            },
            defaultProps: {
                size: "48px",
            },
            render: ({ size }) => <div style={{ height: size }} />,
        },
    },
};

export default config;
