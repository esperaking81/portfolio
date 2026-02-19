"use client";

import { Puck, Data } from "@measured/puck";
import config from "@/lib/puck.config";
import "@measured/puck/puck.css";
import { useEffect, useState } from "react";

export default function Editor() {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        fetch("/api/puck")
            .then((r) => r.json())
            .then((d) => setData(d || { content: [], root: { props: { title: "Portfolio" } } }));
    }, []);

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-500">
                Loading editor...
            </div>
        );
    }

    return (
        <Puck
            config={config}
            data={data}
            onPublish={async (d) => {
                await fetch("/api/puck", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(d),
                });
                alert("Saved!");
            }}
        />
    );
}
