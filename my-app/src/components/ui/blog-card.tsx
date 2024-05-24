import Infos from "@/components/ui/infos";

import { testData } from "@/data/testData";

const BlogCard = () => {
  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      <div className="flex items-start space-x-4">
        <div className="aspect-square h-36 w-36 rounded-xl bg-gray-100 relative">
          {/* 画像予定 */}
          <div className="aspect-square object-cover rounded-md" />
        </div>
        {/* 名前や使用技術、ページリンク */}

        {testData.map((item) => (
          <Infos key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
