"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smartphone, TabletSmartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Infos from "@/components/ui/infos";

import { useModilModal } from "@/hooks/use-mobil-modal";

import { testData } from "@/data/testData";

const ProjectCard = () => {
  const modilModal = useModilModal();
  const testData = useModilModal((state) => state.data);
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const onLink = () => {
    setOpen(false);
    router.push("/");
  };

  const onModilModal = () => {
    setOpen(false);
    modilModal.onOpen(testData);
  };

  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {/* 画像予定 */}
        <div className="aspect-square object-cover rounded-md" />
        {/* レスポンシブボタン */}
        <div className="opacity-0 bg-black absolute bottom-0 right-0 border rounded-xl sm:opacity-70">
          <div className="flex items-center justify-center">
            <Button size="icon">
              <TabletSmartphone
                size={20}
                className="text-gray-600 cursor-pointe hover:text-white"
                onClick={onModilModal}
              />
            </Button>
          </div>
        </div>
      </div>
      {/* 名前や使用技術、ページリンク */}

      <Infos key={testData.name} item={testData} />
    </div>
  );
};

export default ProjectCard;
