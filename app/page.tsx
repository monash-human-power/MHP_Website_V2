import PageSection from "./components/PageSection";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import SponsorshipCarousel from "./components/SponsorCarousel";
import sponsorData from "../public/JSONs/sponsors.json";

const images = [
  "/images/home_page/battle_mountain_group.jpg",
  "/images/home_page/trike_race.jpg",
  "/images/home_page/o_week_group.jpg",
  "/images/home_page/mhp_group.jpg",
];
import Button from "./components/Buttons";
import ProgressBar from "./components/ProgressBar";

export default function Page() {
  return (
    <>
      <div className="px-5">
        <PageSection >
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

        <PageSection >
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
            With support from Monash University and the Engineering
            faculty, we strive to provide a space where Monash students can
            develop valuable, real-world experience which they can carry on into
            their careers. Alongside our technical goals, we also aim to promote
            STEAM to the wider community within the framework of HPVs through
            school outreach programs.
          </p>
          <Button
            hrefString="/bikes"
            text="Learn More"
            theme="dark"
            target=""
          />
        </PageSection>



        <PageSection hasDivider={true}>

            <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
            Join the Ride, Make a Difference!
          </h2>

          <div className="w-full px-4 py-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-white max-w-screen-lg mx-auto">

{/* Left: Money Raised */}
<div className="flex flex-row items-center justify-center space-x-3">
  <ProgressBar fillPercentage={35} />
  <div className="pl-3">
    <p className="text-4xl font-bold">$7,000</p>
    <p className="text-2xl">dollars raised</p>
  </div>
</div>

{/* Center: Greenfleet */}
<div className="flex flex-col items-center justify-center space-y-2 border-x border-dotted border-gray-500 px-2 text-center">
  <p className="xl">We are <br></br>partnering with</p>
  <Image
    src="/images/home_page/GreenFleet_Dark.png"
    alt="Greenfleet"
    width={200}
    height={40}
  />
          <Button
            hrefString="/bikes"
            text="Donate"
            theme="dark"
            target=""
          />

</div>

{/* Right: KM Ridden */}
<div className="flex flex-row items-center justify-center space-x-3">
<div className="pr-3">
  <p className="text-4xl font-bold">850 km</p>
    <p className="text-2xl">ridden</p>
  </div>
  <ProgressBar fillPercentage={50} />
</div>


</div>


          <p className="my-2">

            Help us make an impact by donating or riding a bike!
            All proceeds will be shared between Monash Human Power and Greenfleet.
            <br></br>
            Greenfleet is a not-for-profit environmental organisation dedicated to combating climate change by planting trees and restoring forests across Australia and New Zealand. Your support will help us create a greener, more sustainable future.
          </p>
        </PageSection>
        <PageSection hasDivider={true}>
          <div
            className="py-2"

          >
            <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col justify-start items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5 h-full">
                <h2 className="text-xl font-semibold text-center p-3 sm:mb-0">
                  Community
                </h2>
                <p className="my-4 max-w-prose text-center">
                  We foster meaningful relationships.
                  <br />We celebrate each other.
                  <br />We promote education and collaboration with the HPV community.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5 h-full">
                <h2 className="text-xl font-semibold text-center p-3 sm:mb-0">
                  Curiosity
                </h2>
                <p className="my-4 max-w-prose text-center">
                  We encourage innovation.
                  <br />We ask questions.
                  <br />We push the bounds of what is thought possible.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5 h-full">
                <h2 className="text-xl font-semibold text-center p-3 sm:mb-0">
                  Class
                </h2>
                <p className="my-4 max-w-prose text-center">
                  We take pride in our work.
                  <br />We deliver exceptional results.
                  <br />We never compromise safety.
                </p>
              </div>
            </div>



          </div>
        </PageSection>
        <PageSection hasDivider={true}>
          <div
            className="py-2"

          >
            <h2 className="text-center font-Aldrich underline decoration-green decoration-4 ">
              Our Sponsors
            </h2>
            <div className="mt-4">
              <p>
                Thank you to our amazing sponsors for empowering Monash Human
                Power to push innovation and achieve new milestones. Your support
                makes our success possible!{" "}
              </p>
            </div>
            <SponsorshipCarousel items={sponsorData} />
          </div>
        </PageSection>
      </div>
    </>
  );
}
