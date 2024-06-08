import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/container";

import { CategoryColumnProps } from "./components/columns";
import { CategoryClient } from "./components/client";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

  const formattedCategorieColumn: CategoryColumnProps[] = categories.map(
    (item) => ({ id: item.id, name: item.name })
  );
  return (
    <div className="w-full flex items-center justify-center">
      <div className="pt-6 p-8 w-full  sm:max-w-screen-sm md:max-w-screen-md 2xl:max-w-screen-lg">
        <Container>
          <CategoryClient data={formattedCategorieColumn} />
        </Container>
      </div>
    </div>
  );
};

export default CategoriesPage;
