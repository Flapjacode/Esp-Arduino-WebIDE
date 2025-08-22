import React from "react";

export default function Sidebar({ boards, libraries }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Boards</h2>
      <ul className="space-y-1">
        {Object.keys(boards).map((key) => (
          <li key={key} className="p-1 hover:bg-accent rounded cursor-pointer">
            {boards[key].name}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">Libraries</h2>
      <ul className="space-y-1">
        {libraries.map((lib, i) => (
          <li key={i} className="p-1 hover:bg-accent rounded cursor-pointer">
            {lib}
          </li>
        ))}
      </ul>
    </div>
  );
}
