import { Button } from "@/components/ui/button";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

const questions = [
  {
    title: "nom",
    placehode: "insérez votre nom",
  },
  {
    title: "prenom",
    placehode: "insérez votre prenom",
  },
  {
    title: "Adresse",
    placehode: "insérez votre Adresse",
  },
  {
    title: "Adresse mail",
    placehode: "insérez votre Adresse mail",
  },
  {
    title: "Ajouter Numéro de téléphone",
    placehode: "insérez votre Numéro  de téléphone",
  },
];

const AddPatient = () => {
  const [position, setPosition] = React.useState("1 heure");
  const [position2, setPosition2] = React.useState(
    "Planification des événements"
  );

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Ajouter un patient</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="p-5">
            <div className="text-2xl font-semibold mb-5">
              Ajouter un patient
            </div>
            <div>
              {questions.map((item, index) => (
                <div className="mt-3" key={index}>
                  <label htmlFor={item.title}>{item.title}</label>
                  <div className="mt-1">
                    <Input placehode={item.placehode} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <div>Durée</div>
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild className="w-full">
                  <Button variant="outline">
                    <ChevronDown size={15} /> ({position})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Durée</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="1 heure">
                      1 heure
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="demie journée">
                      demie journée
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="une journée">
                      une journée
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="15 jours">
                      15 jours
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="un mois">
                      un mois
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="6 mois">
                      6 mois
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="1 année">
                      1 année
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-3">
              <div>Autre</div>
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild className="w-full">
                  <Button variant="outline">
                    <ChevronDown size={15} /> ({position2})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Autre</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position2}
                    onValueChange={setPosition2}
                  >
                    <DropdownMenuRadioItem value="Planification des événements">
                      Planification des événements
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Programme des activités">
                      Programme des activités
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Garde d'enfants">
                      Garde d&apos;enfants
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Famille d'accueil">
                      Famille d&apos;accueil
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Transport et accompagnement">
                      Transport et accompagnement
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Menu">
                      Menu
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-7">
              <Button
                onClick={() => {
                  toast.success("ajouté avec succès");
                }}
              >
                Ajouter un patient
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPatient;
