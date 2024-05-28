"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Ratio } from "lucide-react";

import { useModilModal } from "@/hooks/use-mobil-modal";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import Infos from "@/components/ui/infos";
import { Separator } from "@/components/ui/separator";
import { Toggle, TooltipArrow } from "@/components/ui/toggle";

const MobilModal = () => {
  const router = useRouter();
  const mobilModal = useModilModal();
  const dataTest = useModilModal((state) => state.data);

  const [open, setOpen] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(640);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const onLink = () => {
    setOpen(false);
    router.push("/corporate-site");
  };

  const toggleIframeWidth = () => {
    setIframeWidth((prevWidth) => (prevWidth === 640 ? 320 : 640)); // 640pxと320pxを切り替える
  };

  if (!dataTest) {
    return null; // dataTestがない場合、何もレンダリングしない
  }

  return (
    <Modal
      title="Mobile"
      description="Mobile Modal"
      isOpen={mobilModal.isOpen}
      onClose={mobilModal.onClose}
    >
      <div className="flex flex-col justify-between p-4 w-full h-full bg-black">
        <div className=" text-white">
          <Infos item={dataTest} />
        </div>
        <Separator
          className="border border-gray-400 my-4"
          orientation="horizontal"
        />
        <div className="flex justify-center items-start p-4 ">
          <iframe
            src={dataTest.iframesrc}
            className="bg-white border border-spacing-2 border-white shadow-lg shadow-gray-300"
            height="500px"
            width={iframeWidth}
          />
          <Button
            size="icon"
            className="-mt-6 ml-4 relative"
            onClick={toggleIframeWidth}
            onMouseEnter={() => setTooltipVisible(true)} // ホバー時にツールチップを表示
            onMouseLeave={() => setTooltipVisible(false)} // ホバー解除時にツールチップを非表示
          >
            <Ratio className="text-white" />
            {tooltipVisible && (
              <Toggle variant="custom" size="sm" className="font-semibold">
                {iframeWidth === 640 ? "スマホ" : "タブレット"}
                <TooltipArrow />
              </Toggle>
            )}
          </Button>
        </div>
        <div className="pt-6 space-x-2 flex items-center justify-end w-full text-white">
          <Button onClick={mobilModal.onClose}>戻る</Button>
          <Button onClick={onLink}>サイトを見る</Button>
        </div>
      </div>
    </Modal>
  );
};

export default MobilModal;
