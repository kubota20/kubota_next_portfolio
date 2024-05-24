// ProjectsやBlogsの情報に使うUI
"use client";

import { testDataProps } from "@/types/test-data";

interface InfosProps {
  item: testDataProps;
}

const Infos: React.FC<InfosProps> = ({ item }) => {
  return (
    <div className="relative">
      <div key={item.name} className="text-wrap">
        <p className="absolute right-0 text-xs text-gray-500">
          {item.createdAt}
        </p>
        {/* タイトル */}
        <h3 className="font-bold">{item.name}</h3>
        {/* 使用技術 */}
        <ul>
          <li className="text-sm pl-1 text-gray-500 truncate">
            {item.technologies.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Infos;
