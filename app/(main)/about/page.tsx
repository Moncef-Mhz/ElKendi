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
            <strong>El Kendi</strong> is a pharmaceutical company operating in
            Algeria, specializing in the production, distribution and
            development of high-quality medicines. The company plays a key role
            in the healthcare sector by offering prescription and
            over-the-counter medicines, thus contributing to the improvement of
            the health and well-being of the population. With a strong
            commitment to social responsibility, El Kendi actively participates
            in social and cultural initiatives through its Participation
            Committee, thus ensuring the well-being of its employees and the
            community. The company is committed to innovating, ensuring safety
            and continuously improving healthcare standards in Algeria.
          </p>
        </div>
        <HR className="my-10" />
        <div className="flex lg:flex-row flex-col w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            The participation committee:
          </h1>
          <p className="text-base text-hover lg:w-[50%] leading-relaxed">
            The participation committee (CP) is a staff representative
            institution that is mandatory in all companies with more than 20
            employees. The CP is involved in setting up social and cultural
            works in the company. It also participates in the management of its
            economic activity, under the conditions set out by the Labor Code.
            But whatever the field of action in which it intervenes, its goal is
            always to act for the benefit of employees and their families, as
            well as the families of deceased employees.
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

        <HR className="my-10" />
        <div className="flex lg:flex-row flex-col  w-full gap-4">
          <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%]">
            Download the report
          </h1>

          <form
            method="get"
            action={"/bilan.docx"}
            className="text-base text-hover lg:w-[50%] "
          >
            <Button className="leading-relaxed flex items-center gap-1">
              Download
              <Download />
            </Button>
          </form>
        </div>
      </div>
    </Gutter>
  );
};

export default page;
