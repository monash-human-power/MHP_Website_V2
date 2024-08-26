import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      {/* MHP Vehicles Section */}
      <PageSection colourWay="light">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg text-gradient bg-gradient-to-r from-greenbutton to-white">
          MHP Vehicles
        </h1>
        <div className="relative">
          <div className="flex overflow-x-scroll no-scrollbar space-x-6">
            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/v3_w_background.jpg"
                width={1000}
                height={500}
                alt="V3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  V3 Model: New Records!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Tran Ngoc Duy Ngo • XX-ABC-20XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/trike_race2.jpg"
                width={1000}
                height={500}
                alt="Trike Race"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Thrilling Trike Trials!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-21XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain Group"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing Mount Battle!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-22XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain Group"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Mountain!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-22XX</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* MHP Competitions Section */}
      <PageSection colourWay="light">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg text-gradient bg-gradient-to-r from-greenbutton to-white-300">
          MHP Competitions
        </h1>
        <div className="relative">
          <div className="flex overflow-x-scroll no-scrollbar space-x-6">
            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Forest"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Forest!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Tran Ngoc Duy Ngo • XX-ABC-30XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Ocean"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Ocean!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-31XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Mountain!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-32XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 underline decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Mountain!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 underline decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-32XX</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
