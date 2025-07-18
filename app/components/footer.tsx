import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white font-Aldrich py-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 justify-center">
          <div className="justify-center">
            <div className="flex flex-wrap justify-center items-center">
              <p className="text-xl mb-2 ">Monash Human Power</p>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <a
                href="https://www.facebook.com/MonashHumanPower/"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mr-3"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/monashhumanpower/?hl=en"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mr-3"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://au.linkedin.com/company/monashhumanpower"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="mr-3"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a href="https://www.tiktok.com/@monashhumanpower" target="blank">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="mr-3"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCB-4Z6429uRzq5hKz0OuR-A"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="mr-3"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a href="https://github.com/monash-human-power" target="blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className=""
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-center pt-10">
          <p className="text-xs">
            We wish to acknowledge the Wurundjeri People of the Kulin Nations,
            on whose land we build our bikes and pay our respects to their
            Elders, past and present.
          </p>
        </div>
        <div className="flex flex-wrap justify-center text-center pb-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Monash Human Power
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
