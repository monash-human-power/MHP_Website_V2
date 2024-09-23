import React from "react";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function contactUs() {
  return (
    <>
      <PageSection colourWay="dark">
        <div>
          <Image
            src="/contactImage.png"
            layout="responsive"
            height={50}
            width={2000}
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="font-Aldrich bg-black">
          <div
            className="flex flex-wrap justify-center items-center mt-5"
            style={{ color: "#acf601" }}
          >
            <h1>Contact Us</h1>
          </div>
          <form className="px-20">
            <div className="flex flex-wrap justify-center items-center mt-5">
              <div className="flex flex-col justify-left mt-5 md:mr-10">
                <label style={{ color: "#acf601" }}>First Name*</label>
                <input
                  className="border border-#acf601 h-10 w-60 md:w-60"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#acf601",
                  }}
                  type="text"
                  required
                ></input>
              </div>
              <div className="flex flex-col justify-left mt-5">
                <label style={{ color: "#acf601" }}>Last Name*</label>
                <input
                  className="border h-10 w-50 md:w-60"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#acf601",
                  }}
                  type="text"
                  required
                ></input>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-left mt-5">
                <label style={{ color: "#acf601" }}>E-mail*</label>
                <input
                  className="border h-10 w-60 md:w-120"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#acf601",
                  }}
                  type="email"
                  required
                ></input>
              </div>
              <div className="flex flex-col justify-left mt-5">
                <label style={{ color: "#acf601" }}>Message*</label>
                <textarea
                  className="border min-h-20 w-60 md:w-120"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#acf601",
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-10">
              <button
                type="submit"
                className="px-5 py-2 rounded-md border-2 bg-greenbutton text-black border-black font-bold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </PageSection>
    </>
  );
}
