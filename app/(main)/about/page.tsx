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
            développement de médicaments de haute qualité. L'entreprise joue un
            rôle clé dans le secteur de la santé en offrant des médicaments sur
            ordonnance et en vente libre, contribuant ainsi à l'amélioration de
            la santé et du bien-être de la population. Avec un fort engagement
            envers la responsabilité sociétale, El Kendi participe activement à
            des initiatives sociales et culturelles à travers son Comité de
            Participation, assurant ainsi le bien-être de ses employés et de la
            communauté. L'entreprise s'engage à innover, à garantir la sécurité
            et à améliorer continuellement les normes de soins de santé en
            Algérie.
          </p>
        </div>
        <HR className="my-10" />
        <div className="flex lg:flex-row flex-col w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Le comité de participation:
          </h1>
          <p className="text-base text-hover lg:w-[50%] leading-relaxed">
            Le comité de participation (CP)  est une institution représentative
            du personnel rendue obligatoire dans toutes les entreprises de plus
            de 20 salariés. Le C.P. intervient dans la mise en place d’œuvres
            sociales et culturelles dans l’entreprise. Il participe également à
            la gestion de son activité économique, dans les conditions décrétées
            par le code du Travail. Mais quel que soit le champ d’action sur
            lequel il intervient, son but est toujours d’agir au profit des
            salariés et de leur famille, ainsi que les familles des salariés
            décédés.
          </p>
        </div>
        <HR className="my-10" />

        <div className="flex lg:flex-row flex-col w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Notre Comité de participation:
          </h1>
          <div className="text-base text-hover lg:w-[50%] leading-relaxed">
            <p>
              Pour ce qui est du comité de participation pour sa deuxieme mondat
              d’installation a été comme suit:
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
              Le comité de Participation a connu une réorganisation le
              13/04/2022, suite a la démission du Président et le Vice-Président
              du bureau Comité de Participation, dont la composition est comme
              suit:
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

        <HR className="my-10" />
        <div className="flex lg:flex-row flex-col  w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Telecharger le bilan
          </h1>

          <form
            method="get"
            action={"/bilan.docx"}
            className="text-base text-hover lg:w-[50%] "
          >
            <Button className="leading-relaxed flex items-center gap-1">
              Telecharger
              <Download />
            </Button>
          </form>
        </div>
      </div>
    </Gutter>
  );
};

export default page;
