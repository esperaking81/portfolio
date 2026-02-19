export const dynamic = "force-dynamic";

import { Render } from "@measured/puck/rsc";
import config from "@/lib/puck.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espera's Website",
  description: "Built with Next.js",
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const JSON_URL = `${BASE_URL}/api/puck`;

export default async function Page() {
  const response = await fetch(JSON_URL);
  const data = await response.json();

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Render config={config} data={data} />
      </div>
    </main>
  );
}
