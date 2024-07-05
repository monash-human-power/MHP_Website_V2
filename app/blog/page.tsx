import PageSection from "../components/PageSection";
import Image from "next/image";


export default function Blog() {
  return (
    <>
      <PageSection colourWay="light">
        <h1 className="font-Aldrich">
          MHP Blogs
        </h1>
        <br></br>
        <br></br>
        <div className="grid grid-cols-2 gap-20">
          <div className="objectFit: cover">
            <Image src="/v3_w_background.jpg" width={1000} height={200} alt="V3" />
            <h2 className="underline  decoration-purple decoration-4">
              V3 Model: New Records!
            </h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 className="underline  decoration-greenbutton decoration-4">
              Read more
            </h4>
            <p>
              Alvin Fung • XX-ABC-20XX
            </p>
          </div>
          <div className="objectFit: cover">
            <Image src="/trike_race2.jpg" width={1000} height={100} alt="Trike Race" />
            <h2 className="underline  decoration-purple decoration-4">
              Thrilling Trike Trials!
            </h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 className="underline  decoration-greenbutton decoration-4">
              Read more
            </h4>
            <p>
              Alvin Fung • XX-ABC-20XX
            </p>
          </div>
          <div>
            <Image src="/battle_mountain_group.jpg" width={1000} height={100} alt="Battel Mountain Group" />
            <h2 className="underline  decoration-purple decoration-4">
              Competing at Battle Mountain!
            </h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 className="underline  decoration-greenbutton decoration-4">
              Read more
            </h4>
            <p>
              Alvin Fung • XX-ABC-20XX
            </p>
          </div>
        </div>
        <br></br>
        
      </PageSection>
    </>
  );
}

