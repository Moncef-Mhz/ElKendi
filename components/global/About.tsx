import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="my-10 flex lg:flex-row flex-col w-full gap-4 ">
      <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%] ">
        Qui sommes-nous
      </h1>
      <p className="text-base text-hover lg:w-[50%] leading-relaxed">
        Le comité de participation (CP) est une institution représentative du
        personnel, rendue obligatoire dans toutes les entreprises de plus de 20
        employés. Nous jouons un rôle crucial dans la mise en place des œuvres
        sociales et culturelles au sein de l’entreprise, veillant à ce qu’elles
        bénéficient directement aux employés et à leurs familles. Nous
        intervenons également dans la gestion de l’activité économique de
        l’entreprise, conformément aux dispositions du Code du travail. Quel que
        soit notre domaine d’action, notre objectif principal reste toujours
        d’améliorer le bien-être des employés, de leurs proches ainsi que des
        familles des employés décédés.
      </p>
    </div>
  );
}

export default About;
