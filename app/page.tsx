import PageSection from "./components/PageSection";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import SponsorshipCarousel from "./components/SponsorCarousel";
import sponsorData from "../public/JSONs/sponsors.json";
import Button from "./components/Buttons";

export default function Page() {
  const images = [
    "/images/home_page/battle_mountain_group.jpg",
    "/images/home_page/trike_race.jpg",
    "/images/home_page/o_week_group.jpg",
    "/images/home_page/mhp_group.jpg",
  ];
  const values = [
    {
      name: "Community",
      description: "We work collaboratively as a team to achieve shared goals",
    },
    {
      name: "Respect",
      description:
        "We value diverse perspectives and treat all team members with dignity",
    },
    {
      name: "Excellence",
      description:
        "We take pride in our work and continually strive to deliver our best",
    },
    {
      name: "Safety",
      description: "We uphold best practices in safety without compromise",
    },
    {
      name: "Innovation",
      description:
        "We encourage creativity and push the boundaries of what is thought possible",
    },
    {
      name: "Visibility",
      description:
        "We collaborate with the HPV community and promote STEM through outreach",
    },
  ];
  return (
    <>
      <div className="px-5">
        <PageSection colourWay="dark">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h1 className="text-center sm:text-left text-2xl sm:text-4xl">
                MONASH HUMAN POWER
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Image
                src="/images/home_page/v3.png"
                className="flex-grow h-full w-full object-scale-down"
                alt="Image of v3"
                width={1316}
                height={426}
              />
            </div>
            <div className="text-center sm:text-right">
              <h2 className="text-center sm:text-right  underline decoration-green decoration-4">
                Our Story
              </h2>
              <p>
                {`We are a student-led engineering team 
                  based at Monash University
                  in Melbourne, Australia. 
                  Since 2015 we have been designing,
                  manufacturing, and racing fully-faired human-powered vehicles (HPVs)
                  to push the limits of human speed.`}
              </p>
              <Button
                hrefString="https://www.youtube.com/watch?v=psuRwd4hgEA&t=3s"
                text="Learn More"
                theme="dark"
                target="_blank"
              />
            </div>
          </div>
        </PageSection>

        <ImageCarousel images={images}></ImageCarousel>

        <PageSection colourWay="dark">
          <h2 className="font-Aldrich underline  decoration-green decoration-4">
            Our Mission
          </h2>
          <p className="my-2">
            Our team&apos;s vision is to make the fastest HPV in Australia, and
            eventually the world. We&apos;re hoping to break the HPV land-speed
            record in Australia (currently 96.7km/h) having ridden at faster
            speeds during the 2023 World Human Powered Speed Challenge, an
            international competition in the U.S. which we plan to return to in
            2025.
            <br />
            <br />
            With support from Monash University and the Engineering faculty, we
            strive to provide a space where Monash students can develop
            valuable, real-world experience which they can carry on into their
            careers. Alongside our technical goals, we also aim to promote STEM
            to the wider community within the framework of HPVs through school
            outreach programs.
          </p>
          <Button
            hrefString="/bikes"
            text="Learn More"
            theme="dark"
            target=""
          />
        </PageSection>

        <PageSection colourWay="dark">
          <div
            className="py-2"
            style={{
              borderTop: "2px solid #5e5b5b", // Top border
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {values.map((value,idx) => (
                <div key={idx} className="flex flex-col justify-start items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5 h-full">
                  <h2 className="text-l font-semibold  text-wrap text-center p-3 sm:mb-0   md:text-xl">
                  {value.name}
                  </h2>
                  <p className="my-4 max-w-prose text-center">
                  {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection colourWay="dark">
          <div
            className="py-2"
            style={{
              borderTop: "2px solid #5e5b5b", // Top border
              borderBottom: "2px solid #5e5b5b", // Bottom border
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
              Our Sponsors
            </h2>
            <div className="mt-4">
              <p>
                Thank you to our amazing sponsors for empowering Monash Human
                Power to push innovation and achieve new milestones. Your
                support makes our success possible!{" "}
              </p>
            </div>
            <SponsorshipCarousel items={sponsorData} />
          </div>
        </PageSection>
      </div>
    </>
  );
}
