import PageSection from "./components/PageSection";
import Image from "next/image";
import Navbar from "./components/Navbar/navBar";

export default function Page() {
  return (
    <>
      <PageSection colourWay="dark">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1>MONASH HUMAN POWER</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* Todo: make image largern */}
            <Image src="/v3.png" width={1000} height={200} alt="" />
          </div>
          <div className="text-right">
            {" "}
            <h2 className=" text-right ">Our Story</h2>
            <p className="font-light">
              {`
            We are a student-led engineering team 
            based at Monash University
            in Melbourne, Australia. 
            Since 2015 we have been designing,
            manufacturing, and racing fully-faired human-powered vehicles (HPVs)
            to push the limits of human speed.`}
            </p>
            <p>fake button</p>
          </div>
        </div>
      </PageSection>

      <PageSection colourWay="light">
        <h2 className="font-Aldrich underline  decoration-purple decoration-4">
          Our mission
        </h2>
        <p>
          Our team’s vision is to make the fastest HPV in Australia, and
          eventually the world. We’re hoping to break the HPV land-speed record
          in Australia (currently 96.7km/h) having ridden at faster speeds
          during the 2023 World Human Powered Speed Challenge, an international
          competition in the U.S. which we plan to return to in 2025. With
          support from Monash University and the Engineering faculty, we strive
          to provide a space where Monash students can develop valuable,
          real-world experience which they can carry on into their careers.
          Alongside our technical goals, we also aim to promote STEAM to the
          wider community within the framework of HPVs through school outreach
          programs.
        </p>
      </PageSection>
      <PageSection colourWay="light">
        <h2 className="font-Aldrich underline  decoration-purple decoration-4">Our Story</h2>
        <p>
          We are a student-led engineering team based at Monash University in
          Melbourne, Australia. Since 2015 we have been designing,
          manufacturing, and racing fully-faired human-powered vehicles (HPVs)
          to push the limits of human speed.
        </p>
      </PageSection>
    </>
  );
}
