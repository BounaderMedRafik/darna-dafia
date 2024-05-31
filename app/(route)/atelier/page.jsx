"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
const EnfantAt = [
  {
    name: "Écriture",
    picture:
      "https://images.unsplash.com/photo-1616089804112-f0a475d1b193?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Création de récits captivants,Maîtriser les éléments fondamentaux de l'écriture.",
  },
  {
    name: "Lecture",
    picture:
      "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Comprendre la relation entre les lettres et les son, Lire couramment et avec expression.",
  },
  {
    name: "dessin",
    picture:
      "https://images.unsplash.com/photo-1544773088-d142e38f5793?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Comprendre les éléments fondamentaux du dessin.Exercices d'imagination et de libre expression.",
  },
  {
    name: "Quran",
    picture:
      "https://plus.unsplash.com/premium_photo-1678558709944-606470180b5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Atmosphère positive et respectueuse des valeurs islamiques",
  },
];

const page = () => {
  return (
    <div className=" max-w-7xl m-auto py-10">
      <div className="text-4xl font-bold mb-5">Atelier Pour Enfants</div>
      <div className=" grid grid-cols-1 p-5 md:p-0 md:grid-cols-4 gap-2 ">
        {EnfantAt.map((item, i) => (
          <div
            className="w-full  max-h-[350px] rounded-lg overflow-hidden hover:opacity-90 shadow-lg border border-black/20"
            key={i}
          >
            <img className=" h-1/2 w-full object-cover" src={item.picture} />
            <div className="p-4">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-sm font-light mt-2">{item.desc}</div>
              <div>
                <SubBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <LesCours />
      </div>
      <div className="my-10 h-px bg-black/20 w-full"></div>
      <div>
        <ELderSection />
      </div>
    </div>
  );
};

const SubBtn = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mt-5">
      <Button
        className={cn(clicked ? "bg-green-700  hover:bg-green-600" : "")}
        onClick={() => {
          setClicked(!clicked);
          toast.success("Vous êtes abonné(e) avec succès");
        }}
      >
        {clicked ? "Vous vous êtes abonné(e)" : "abonné"}
      </Button>
    </div>
  );
};

const EnfCour = [
  {
    name: "PHYSICS EXPERIMENTS FOR CHILDREN",
    link: "https://www.arvindguptatoys.com/arvindgupta/physicsexperiments.pdf",
  },

  {
    name: "Single digit subtraction",
    link: "https://www.k5learning.com/worksheets/math/grade-2-single-digit-subtraction-a.pdf",
  },
  {
    name: "Subtracting with regrouping, missing number",
    link: "https://www.k5learning.com/worksheets/math/grade-2-subtracting-1-digit-from-2-digit-missing-number-e.pdf",
  },
  {
    name: "Greatest common factor (GCF)",
    link: "https://www.k5learning.com/worksheets/math/grade-5-greatest-common-factor-2-50-d.pdf",
  },
  {
    name: "Writing algebraic expressions",
    link: "https://www.k5learning.com/worksheets/math/algebra/grade-5-write-expressions-a.pdf",
  },
  {
    name: "Teaching Quran",
    link: "https://madressa.net/images/2017/QAnotes/2017_Teachers_QM_Juniors_Level1&2.pdf",
  },
];

const LesCours = () => {
  return (
    <div className="my-10">
      <div className="text-4xl font-bold mb-5">Les cours pour Les Enfants</div>
      <div className=" mt-10 flex flex-col gap-2">
        {EnfCour.map((item, i) => (
          <a
            target="_blank"
            href={item.link}
            className="p-5 hover:text-primary transition-all w-full max-w-4xl hover:opacity-80 flex items-center justify-between py-4 mx-auto  rounded-lg  border border-black/20"
          >
            <div className="font-semibold">{item.name}</div>
            <div className="text-xs flex items-center justify-center gap-2">
              Check it now
              <ArrowRight size={15} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const ELderSection = () => {
  return <div>helo</div>;
};

export default page;
