import { prisma } from "@/lib/prisma";

import { CategoryColumnProps } from "./components/columns";
import { CategoryClient } from "./components/client";
import Container from "@/components/ui/container";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

  const formattedCategorieColumn: CategoryColumnProps[] = categories.map(
    (item) => ({ id: item.id, name: item.name })
  );
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Container>
        <CategoryClient data={formattedCategorieColumn} />
      </Container>
    </div>
  );
};

export default CategoriesPage;
