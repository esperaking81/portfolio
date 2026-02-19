import React from "react";

interface Post {
    title: string;
    date: string;
    link: string;
}

interface WritingListProps {
    title?: string;
    posts: Post[];
}

export const WritingList: React.FC<WritingListProps> = ({ title = "Writing", posts }) => {
    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="space-y-6">
                {posts.map((post, index) => (
                    <a
                        key={index}
                        href={post.link}
                        className="flex flex-col md:flex-row md:items-baseline md:justify-between group hover:opacity-100 transition-opacity"
                    >
                        <h3 className="text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h3>
                        <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                            {post.date}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};
