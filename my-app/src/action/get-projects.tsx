import qs from "query-string";
import { Project } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/projects`;

interface Query {
  categoryId?: string;
  release?: string;
}

export const getProjects = async (query: Query): Promise<Project[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      // release: query.release,
    },
  });

  try {
    const res = await fetch(url, {
      // SSR
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch Projects:", error);
    throw error;
  }
};
