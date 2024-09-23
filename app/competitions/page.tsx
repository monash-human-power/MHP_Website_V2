import React from "react";
import PageSection from "../components/PageSection";
import ImageCarousel from "../components/ImageCarousel";

const hpvImages = ["/hpvImage1.jpg", "/hpvImage2.jpg", "/hpvImage3.jpg"];
const bmImages = ["/bmImage1.jpg", "/bmImage2.jpg", "/bmImage3.jpg"];
const ozhpvImages = ["/competitionImage2.png"];

export default function Competitions() {
  return (
    <>
      <PageSection colourWay="dark">
        <div className="font-Aldrich bg-black text-white min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl text-[#acf601] mb-5">Competitions</h1>
            <p>
              Monash Human Power participates in various competitions that
              challenge the boundaries of human-powered vehicle innovation.
              These events offer the team opportunities to showcase their
              engineering prowess and push performance limits. With each
              competition, Monash Human Power continues to refine its designs,
              striving to break speed records and achieve new milestones in
              human-powered transportation.
            </p>
          </div>

          {/* World Human Powered Speed Challenge Section */}
          <div className="mt-20">
            <h1 className="text-center text-2xl text-[#acf601] mb-5">
              World Human Powered Speed Challenge
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 sm:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
            </div>
            <p className="mt-3 text-justify">
              The World Human Powered Speed Challenge, held annually on State
              Route 305 in Battle Mountain, Nevada, attracts top teams worldwide
              aiming to break the human-powered land speed record, which
              currently stands at 144 km/h. This event presents a unique
              combination of engineering and athleticism, where teams refine
              their vehicle designs to reduce drag and maximize speed. In 2023,
              Monash Human Power made history by surpassing the Australian men’s
              single-track record, a significant milestone in their pursuit of
              speed innovation.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2">
                <ImageCarousel images={bmImages}></ImageCarousel>
              </div>
            </div>
          </div>

          {/* Vic HPV Grand Prix Series */}
          <div className="mt-20 mb-5">
            <h1 className="text-center text-2xl text-[#acf601] mb-5">
              Vic HPV Grand Prix Series
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 sm:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
            </div>
            <p className="mt-3 text-justify">
              The VIC HPV Grand Prix Series is a 6-8 hour endurance race for
              human-powered vehicles (HPVs) on a circuit, offering a unique
              challenge compared to the short sprints of the World Human Powered
              Speed Challenge (WHPSC). Unlike the speed-focused events, this
              race tests vehicle durability and rider endurance over longer
              distances. Monash Human Power has entered this competition with a
              borrowed trike while developing its custom-designed trike, aiming
              to push new boundaries in endurance HPV racing.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2">
                <ImageCarousel images={hpvImages}></ImageCarousel>
              </div>
            </div>
          </div>

          {/* OzHPV Speed Trials Section */}
          <div className="mt-20">
            <h1 className="text-center text-2xl text-[#acf601] mb-5">
              OzHPV Speed Trials
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-3 sm:space-y-0 sm:space-x-5 mb-5">
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
              <p className="text-center border rounded-3xl border-[#acf601] p-3 sm:mb-0">
                Add stats here
              </p>
            </div>
            <p className="mt-3 text-justify">
              The OzHPV Challenge is an exciting series of races designed to
              test the best combinations of human-powered vehicles and rider
              capabilities. Hosted at the Ford Proving Grounds in You Yangs,
              Victoria, the trials push teams to fine-tune their designs for
              peak performance under real-world conditions. The current
              Australian record for this competition stands at 96.68 km/h, with
              Monash Human Power competing to challenge this benchmark,
              showcasing their commitment to developing world-class
              human-powered vehicles.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-5">
              <div className="w-full lg:w-1/2 sm:h-1/2">
                <ImageCarousel images={ozhpvImages}></ImageCarousel>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
