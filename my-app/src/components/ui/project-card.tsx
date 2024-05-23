import { Button } from "@/components/ui/button";
import Infos from "@/components/ui/infos";
import { Smartphone, TabletSmartphone } from "lucide-react";

import { testData } from "@/data/testData";

const ProjectCard = () => {
  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {/* 画像予定 */}
        <div className="aspect-square object-cover rounded-md" />
        {/* レスポンシブボタン */}
        <div className="opacity-0 bg-black absolute bottom-0 right-0 border rounded-xl sm:opacity-70">
          <div className="flex items-center justify-center">
            {/* スマホボタン */}
            <Button
              size="icon"
              className="text-gray-600 cursor-pointe hover:text-white"
            >
              <Smartphone size={20} />
            </Button>
            {/* タブレットボタン */}
            <Button size="icon">
              <TabletSmartphone
                size={20}
                className="text-gray-600 cursor-pointe hover:text-white"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* 名前や使用技術、ページリンク */}
      <Infos data={testData} />
    </div>
  );
};

export default ProjectCard;
