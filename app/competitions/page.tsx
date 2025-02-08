import React from "react";
import PageSection from "../components/PageSection";
import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google';

const hpvImages = [
  "/hpvImages/image1.jpg",
  "/hpvImages/image2.jpg",
  "/hpvImages/image3.jpg",
];
const bmImages = [
  "/whpscImages/image1.jpg",
  "/whpscImages/image2.jpg",
  "/whpscImages/image3.jpg",
];

export default function Competitions() {
  return (
    <>
      <title>
        Competitions | MHP
      </title>
      <div className="font-Aldrich bg-black text-white  px-15">
        <h4 className="text-center text-5xl ">Competitions</h4>

        <PageSection colourWay="dark">
          <div className="">
            {/* Header Section */}
            <h2 className="text-center">
              Monash Human Power participates in various competitions that
              challenge the boundaries of human-powered vehicle innovation.
              These events offer the team opportunities to showcase their
              engineering prowess and push performance limits. With each
              competition, Monash Human Power continues to refine its designs,
              striving to break speed records and achieve new milestones in
              human-powered transportation.
            </h2>
          </div>
        </PageSection>

        <PageSection colourWay="dark">
          {/* World Human Powered Speed Challenge Section */}
          <div className="mt-20">
            <div
              className="p-4"
              style={{
                borderTop: "2px solid #5e5b5b",
                width: "95%",
                margin: "0 auto",
                textAlign: "center",
              }}
            ></div>
            <h1 className="text-center text-[#acf601] mb-5">
              World Human Powered Speed Challenge
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Rider: Kit Kirby | Top Speed: 116.39 kmph | World Rank: 39
                <sup>th</sup>
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Rider: Alastair Haslam | Top Speed: 116.05 kmph | World Rank: 42
                <sup>nd</sup>
              </p>
            </div>
            <h2 className="mt-3 text-center">
              The World Human Powered Speed Challenge, held annually on State
              Route 305 in Battle Mountain, Nevada, attracts top teams worldwide
              aiming to break the human-powered land speed record, which
              currently stands at 144 km/h. This event presents a unique
              combination of engineering and athleticism, where teams refine
              their vehicle designs to reduce drag and maximize speed. In 2023,
              Monash Human Power made history by surpassing the Australian men’s
              single-track record, a significant milestone in their pursuit of
              speed innovation.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2">
                <ImageCarousel images={bmImages}></ImageCarousel>
              </div>
            </div>
          </div>
        </PageSection>
        {/* Vic HPV Grand Prix Series */}
        <PageSection colourWay="dark">
          <div className="mt-20 mb-5">
            <div
              className="p-4"
              style={{
                borderTop: "2px solid #5e5b5b",
                width: "95%",
                margin: "0 auto",
                textAlign: "center",
              }}
            ></div>
            <h1 className="text-center  text-[#acf601] mb-5">
              Vic HPV Grand Prix Series
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Race 1: 6/9 In Category | 24/58 Overall
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Race 2: 5/9 In Category | 21/81 Overall
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Race 3: 4/8 In Category | 25/98 Overall
              </p>
            </div>
            <h2 className="mt-3 text-center">
              The VIC HPV Grand Prix Series is a 6-8 hour endurance race for
              human-powered vehicles (HPVs) on a circuit, offering a unique
              challenge compared to the short sprints of the World Human Powered
              Speed Challenge (WHPSC). Unlike the speed-focused events, this
              race tests vehicle durability and rider endurance over longer
              distances. Monash Human Power has entered this competition with a
              borrowed trike while developing its custom-designed trike, aiming
              to push new boundaries in endurance HPV racing.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2">
                <ImageCarousel images={hpvImages}></ImageCarousel>
              </div>
            </div>

            <div
              className="p-4"
              style={{
                borderBottom: "2px solid #5e5b5b",
                width: "95%",
                margin: "0 auto",
                textAlign: "center",
              }}
            ></div>
          </div>
        </PageSection>

        {/* OzHPV Speed Trials Section */}
        <PageSection colourWay="dark">
          <div>
            <h1 className="text-center text-[#acf601] mb-5">
              OzHPV Speed Trials
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-3 lg:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Rider: Ellen | Record: Women&apos;s Standing 10km | Top Speed:
                40.328 kmph
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Rider: Kit Kirby | Record: Men&apos;s F200 2 Wheel | Top Speed:
                87.40 kmph
              </p>
            </div>
            <h2 className="mt-3 text-center">
              The OzHPV Challenge is an exciting series of races designed to
              test the best combinations of human-powered vehicles and rider
              capabilities. Hosted at the Ford Proving Grounds in You Yangs,
              Victoria, the trials push teams to fine-tune their designs for
              peak performance under real-world conditions. The current
              Australian record for this competition stands at 96.68 km/h, with
              Monash Human Power competing to challenge this benchmark,
              showcasing their commitment to developing world-class
              human-powered vehicles.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2 center">
                <Image
                  src="/competitionImage2.png"
                  layout="intrinsic"
                  width={700}
                  height={200}
                  alt="ozhpv"
                />
              </div>
            </div>
            <div
              className="py-2"
              style={{
                borderBottom: "2px solid #5e5b5b",
                width: "95%",
                margin: "0 auto",
                textAlign: "center",
              }}
            ></div>
          </div>
        </PageSection>
      </div>
    </>
  );
}
