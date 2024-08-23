import PageSection from "../components/PageSection";
import Image from "next/image";
import Navbar from "../components/Navbar/navBar";
import ImageCarousel from "../components/ImageCarousel";

import Button from "../components/Buttons";

export default function Bikes() {
  return (
    <>
      <PageSection colourWay="dark">
        <div className="object-fit: contain">
          <Image src="/bikes/t1-rectangle.jpg"  width={1000} height={200} alt="" />
        </div>
      </PageSection>

      <PageSection colourWay="dark">
        <div className="object-fit: contain">
            <Image src="/bikes/t1-rectangle.jpg" width={1000} height={200} alt="" />
        </div>
      </PageSection>
      <PageSection colourWay="dark">
        <h2>Our Story</h2>
      </PageSection>
    </>
  );
}
