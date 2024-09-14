import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Outreach() {
  return (
    <>
      {/* Battle Mountain Group Image */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden mx-auto">
          <Image
            src="/battle_mountain_group.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Epsom Primary School"
            layout="responsive"
            // className="top-1/2 transform -translate-y-1/4"
          />
        </div>
        <section id="ourPrograms"></section>
      </section>

      {/* Join Us section */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h1 className="text-5xl text-[#acf601] font-bold">Join Us</h1>
          <div className="text-xl"
            style={{
                paddingTop: "40px",
                paddingBottom: "20px",
                width: "60%",
                margin: "0 auto",
            }}>
            <p>Applications are currently closed.</p>
            <br></br>
            <p>
              Fill out an expression of interest and sign up to our mailing
              list!
            </p>
            <br></br>
            <p>
              If you have any further questions or queries, feel free to direct
              them to monashhpt@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center text-3xl"
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
        }}>
          {/* Expression of Interest button links to Google Form */}
          <button>
            <h2 className="px-5 py-2 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white">
              Expression of Interest
            </h2>
          </button>
        </div>
      </PageSection>
    </>
  );
}
