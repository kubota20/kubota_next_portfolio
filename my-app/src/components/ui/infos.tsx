// ProjectsやBlogsの情報に使うUI
"use client";

import { testDataProps } from "@/types/test-data";

interface InfosProps {
  data: testDataProps[];
}

const Infos: React.FC<InfosProps> = ({ data }) => {
  return (
    <div className="px-1">
      {data.map((item) => (
        <div key={item.name} className="text-wrap">
          {/* タイトル */}
          <h3 className="font-bold">{item.name}</h3>
          {/* 使用技術 */}
          <ul>
            <li className="text-sm pl-1 text-gray-500 truncate">
              {item.technologies.join(", ")}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Infos;
