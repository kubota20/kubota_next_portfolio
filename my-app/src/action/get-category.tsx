import { Category } from "@/types/types";

const URL = `${process.env.NEXT_ADMIN_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
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
    console.error("Failed to fetch Category:", error);
    throw error;
  }
};
