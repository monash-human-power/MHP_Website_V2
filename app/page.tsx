import PageSection from "./components/PageSection";

export default function Page() {
  return (
    <>
      <PageSection colourWay="dark">
        <h1>MONASH HUMAN POWER</h1>
        <h2>Our Story</h2>
        <p>
          We are a student-led engineering team based at Monash University in
          Melbourne, Australia. Since 2015 we have been designing,
          manufacturing, and racing fully-faired human-powered vehicles (HPVs)
          to push the limits of human speed.
        </p>
        fake button
      </PageSection>

      <PageSection colourWay="light">
        <h2>OUR MISSION</h2>
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
    </>
  );
}
