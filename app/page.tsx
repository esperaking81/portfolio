import { Render } from "@measured/puck/rsc";
import config from "@/lib/puck.config";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espera's Website",
  description: "Built with Next.js",
};

export default async function Page() {
  const filePath = path.join(process.cwd(), "puck.json");
  let data = { content: [], root: { title: "Portfolio" } };

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (fileContent) {
      try {
        data = JSON.parse(fileContent);
      } catch (e) {
        console.error("Failed to parse puck.json", e);
      }
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Render config={config} data={data} />
      </div>
    </main>
  );
}
