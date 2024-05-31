"use client";
import React, { useState } from "react";
const EnfantAt = [
  {
    name: "Écriture",
    picture:
      "https://images.unsplash.com/photo-1616089804112-f0a475d1b193?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Création de récits captivants,Maîtriser les éléments fondamentaux de l'écriture.",
  },
];

const page = () => {
  return (
    <div className=" max-w-7xl m-auto py-10">
      <div className="text-4xl font-bold mb-5">Atelier Pour Enfants</div>
      <div className=" grid grid-cols-4 gap-2 ">
        {EnfantAt.map((item, i) => (
          <div
            className="w-full min-h-80 rounded-lg shadow-lg border border-black"
            key={i}
          >
            <img className=" h-1/2 w-full object-cover" src={item.picture} />
            <div className="p-4">
              <div className="text-xl">{item.name}</div>
              <div className="text-sm font-light mt-2">{item.desc}</div>
              <div>
                <SubBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubBtn = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mt-5">
      <button
        onClick={() => setClicked(!clicked)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 px-4 py-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {clicked ? "Abonnment succes" : "Abonne"}
      </button>
    </div>
  );
};

export default page;
