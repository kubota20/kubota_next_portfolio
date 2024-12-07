import { Project } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/projects`;

export const getProject = async (id: string): Promise<Project[]> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      // SSR
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch Project:", error);
    throw error;
  }
};
