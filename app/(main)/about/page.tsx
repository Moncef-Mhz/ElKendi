import Badge from "@/components/global/Badge";
import { Gutter } from "@/components/global/Gutter";
import { Button } from "@/components/ui/button";
import { HR } from "@/components/ui/hr";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Gutter>
      <div className="mt-10 ">
        <Image
          src="/image2.jpg"
          height={800}
          width={800}
          alt="hero"
          className="object-cover w-full rounded-md"
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <Badge />
      </div>
      <div className="">
        <div className="flex lg:flex-row flex-col w-full gap-4 ">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            El Kendi:
          </h1>
          <p className="text-base text-hover lg:w-[50%] leading-relaxed">
            <strong>El Kendi</strong> est une entreprise pharmaceutique opérant
            en Algérie, spécialisée dans la production, la distribution et le
            développement de médicaments de haute qualité. Elle joue un rôle clé
            dans le secteur de la santé en proposant des médicaments sur
            ordonnance et en vente libre, contribuant ainsi à l’amélioration de
            la santé et du bien-être de la population. Avec un fort engagement
            envers la responsabilité sociale, El Kendi participe activement à
            des initiatives sociales et culturelles à travers son Comité de
            Participation, veillant ainsi au bien-être de ses employés et de la
            communauté. L’entreprise s’engage à innover, garantir la sécurité et
            améliorer continuellement les standards de soins de santé en
            Algérie.
          </p>
        </div>
        <HR className="my-10" />
        <div className="flex lg:flex-row flex-col w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Le comité de participation :
          </h1>
          <p className="text-base text-hover lg:w-[50%] leading-relaxed">
            Le comité de participation (CP) est une institution représentative
            du personnel, obligatoire dans toutes les entreprises de plus de 20
            employés. Le CP intervient dans la mise en place des œuvres sociales
            et culturelles au sein de l’entreprise. Il participe également à la
            gestion de son activité économique, dans les conditions prévues par
            le Code du travail. Quel que soit son domaine d’action, son objectif
            reste toujours d’agir au bénéfice des employés et de leurs familles,
            ainsi que des familles des employés décédés.
          </p>
        </div>
        <HR className="my-10" />

        <div className="flex lg:flex-row flex-col w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Our Participation Committee:
          </h1>
          <div className="text-base text-hover lg:w-[50%] leading-relaxed">
            <p>
              As for the participation committee for its second world of
              installation was as follows:
            </p>
            <br />
            <ul className="ml-5 list-disc">
              <li>Mr Meridja Nazim, Président </li>
              <li>Mr Sadouki Ahmed, Vice-Président</li>
              <li>Mr Hamitouche Fayçal Samir, Trésorier</li>
              <li> Mr Mihoubi Mohamed, Membre </li>
              <li>Mr Ghiat Redouane , Membre</li>
              <li>Mr Nadjmaoui Mohamed Rabah, Membre</li>
            </ul>
            <br />
            <p>
              The Participation Committee underwent a reorganization on
              04/13/2022, following the resignation of the President and the
              Vice-President of the Participation Committee office, whose
              composition is as follows:
            </p>
            <br />
            <ul className="ml-5 list-disc">
              <li>Mr Ahmed Mechbiche, Président </li>
              <li>Mr Slimani Merzak, Vice-Président</li>
              <li>Mr Fritih Sidali, Trésorier</li>
              <li>Mr Ghiat Redouane, Membre </li>
              <li>Mr Hamitouche Fayçal Samir, Membre</li>
              <li>Mr Nadjmaoui Mohamed Rabah, Membre</li>
            </ul>
          </div>
        </div>
      </div>
    </Gutter>
  );
};

export default page;
