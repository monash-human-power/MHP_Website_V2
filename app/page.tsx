import PageSection from "./components/PageSection";
import Image from "next/image";
import Navbar from "./components/Navbar/navBar";
import ImageCarousel from "./components/ImageCarousel";
import SponsorshipCarousel from "./components/SponsorCarousel";
import sponsorData from "../public/JSONs/sponsors.json";
import ArrowDown from "./components/ArrowDown";

const images = [
  "/battle_mountain_group.jpg",
  "/trike_race.jpg",
  "/o_week_group.jpg",
  "/mhp_group.jpg",
];
import Button from "./components/Buttons";

export default function Page() {
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
                src="/v3.png"
                className="flex-grow h-full w-full object-cover"
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
                {`
        We are a student-led engineering team 
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
              />
            </div>
          </div>
        </PageSection>

        <ImageCarousel images={images}></ImageCarousel>

        <PageSection colourWay="dark">
          <h2 className="font-Aldrich underline  decoration-green decoration-4">
            Our mission
          </h2>
          <p className="my-2">
            Our team’s vision is to make the fastest HPV in Australia, and
            eventually the world. We’re hoping to break the HPV land-speed
            record in Australia (currently 96.7km/h) having ridden at faster
            speeds during the 2023 World Human Powered Speed Challenge, an
            international competition in the U.S. which we plan to return to in
            2025. With support from Monash University and the Engineering
            faculty, we strive to provide a space where Monash students can
            develop valuable, real-world experience which they can carry on into
            their careers. Alongside our technical goals, we also aim to promote
            STEAM to the wider community within the framework of HPVs through
            school outreach programs.
          </p>
          <Button hrefString="/bikes" text="Learn More" theme="dark" />
        </PageSection>

        <PageSection colourWay="dark">
          <div
            className="py-2"
            style={{
              borderTop: "2px solid #5e5b5b", // Top border
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
            }}
          ></div>
          <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <h2 className="text-center  p-3 sm:mb-0">Quality</h2>
              <p className="my-4">
                Our team’s vision is to make the fastest HPV in Australia, and
                eventually the world. We’re hoping to break the HPV land-speed
                record in Australia (currently 96.7km/h) having ridden at faster
                speeds during the 2023 World Human Powered Speed Challenge, an
                international competition in the U.S. which we plan to return to
                in 2025. With support from Monash University and the Engineering
                faculty, we strive to provide a space where Monash students can
                develop valuable, real-world experience which they can carry on
                into their careers. Alongside our technical goals, we also aim
                to promote STEAM to the wider community within the framework of
                HPVs through school outreach programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <h2 className="text-center  p-3 sm:mb-0">Consistency</h2>
              <p className="my-4">
                Our team’s vision is to make the fastest HPV in Australia, and
                eventually the world. We’re hoping to break the HPV land-speed
                record in Australia (currently 96.7km/h) having ridden at faster
                speeds during the 2023 World Human Powered Speed Challenge, an
                international competition in the U.S. which we plan to return to
                in 2025. With support from Monash University and the Engineering
                faculty, we strive to provide a space where Monash students can
                develop valuable, real-world experience which they can carry on
                into their careers. Alongside our technical goals, we also aim
                to promote STEAM to the wider community within the framework of
                HPVs through school outreach programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <h2 className="text-center p-3 sm:mb-0">Pride</h2>
              <p className="my-4">
                Our team’s vision is to make the fastest HPV in Australia, and
                eventually the world. We’re hoping to break the HPV land-speed
                record in Australia (currently 96.7km/h) having ridden at faster
                speeds during the 2023 World Human Powered Speed Challenge, an
                international competition in the U.S. which we plan to return to
                in 2025. With support from Monash University and the Engineering
                faculty, we strive to provide a space where Monash students can
                develop valuable, real-world experience which they can carry on
                into their careers. Alongside our technical goals, we also aim
                to promote STEAM to the wider community within the framework of
                HPVs through school outreach programs.
              </p>
            </div>
          </div>
          <div
            className="py-2"
            style={{
              borderTop: "2px solid #5e5b5b", // Top border
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
            }}
          ></div>
        </PageSection>

        <PageSection colourWay="dark">
          <SponsorshipCarousel items={sponsorData} />
        </PageSection>
      </div>
    </>
  );
}
