"use client";
import { useState } from "react";
import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";
import programData from "../../public/JSONs/programs.json"; // Importing the JSON file

export default function Outreach() {


  return (
    <>
      <title>
        Sponsors | MHP
      </title>
      <PageSection colourWay="dark">
        <h1 className="text-center text-5xl">Sponsorship</h1>
        <Image
          src="/images/sponsor_page/hero.png"
          width="5184"
          height="2309"
          objectFit="cover"
          alt="Three MHP Members conversing"
          layout="responsive"
        />
      </PageSection>


    </>
  );
}
