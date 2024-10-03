import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="my-10 flex lg:flex-row flex-col w-full gap-4 ">
      <h1 className="text-3xl xl:text-4xl font-semibold lg:w-[50%] ">
        Who are we
      </h1>
      <p className="text-base text-hover lg:w-[50%] leading-relaxed">
        The participation committee (CP) is a staff representative institution,
        made mandatory in all companies with more than 20 employees. We play a
        crucial role in setting up social and cultural works within the company,
        ensuring that they directly benefit employees and their families. We
        also intervene in the management of the company's economic activity, in
        accordance with the provisions of the Labor Code. Whatever the area in
        which we act, our main objective always remains to improve the
        well-being of employees, their loved ones, as well as the families of
        deceased employees.
      </p>
    </div>
  );
}

export default About;
