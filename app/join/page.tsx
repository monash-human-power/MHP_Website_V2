"use client";
import ApplicationCarousel from "../components/ApplicationCarousel/ApplicationCarousel";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Join() {
  return (
    <>
      <title>
        Join | MHP
      </title>
      
      {/* Cover Image */}
      <section className="animate-fadeIn">
        <Image
          src="/images/join_page/join_main.jpg"
          width="5184"
          height="2309"
          objectFit="cover"
          alt="Trike Group photo"
          layout="responsive"
        />
      </section>

      {/* Join Us section */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h1 className="text-center text-5xl">
            Join Us
          </h1>
          <div
            className="text-xl"
            style={{
              paddingTop: "40px",
              paddingBottom: "20px",
              width: "60%",
              margin: "0 auto",
            }}
          >
            <p>Applications are open!</p>
            <br/>

            <p>
              Apply for one of MHP's subteams below.            <br/>

              If you have any further questions or queries, feel free to direct
              them to monashhpt@gmail.com
            </p>
          </div>
        </div>
        <div
          className="text-center text-xl lg:text-3xl"
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          {/* Expression of Interest button links to Google Form */}
          <a href="https://forms.gle/U3Nn54SyTsi1WJYj7" target="_blank">
            <button className=" font-Sansation font-semibold px-4 py-2 lg:px-16 lg:py-2 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white">
              EOI Form
            </button>
          </a>
        </div>
      </PageSection>

      <ApplicationCarousel />


    </>
  );
}
