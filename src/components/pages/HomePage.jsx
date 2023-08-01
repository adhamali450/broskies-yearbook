import { useState } from "react";
import Rating from "@components/Rating";
import BroskiesBrowser from "@components/BroskiesBrowser";
import MiniGallery from "@components/MiniGallery";
// import Lightbox from "react-lightbox-component";

import PropTypes from "prop-types";

import isommetricGrid from "@assets/isometric-grid.svg";

import { getLang } from "@utils";
const HomePage = ({ details }) => {
  // const topRated = details.filter((d) => d.rating == 5);
  const [selectedBroskie, setSelectedBroskie] = useState(
    details.find((d) => d.id === 0)
  );
  const [selectedImage, setSelectedImage] = useState("");

  const broskieChangedHandler = (id) => {
    setSelectedBroskie(details.find((d) => d.id === id));
  };

  return (
    <div className="h-[100vh] flex flex-col items-center">
      <div
        className="absolute -z-10 opacity-50 -translate-x-1/2 left-1/2 bottom-0 w-[300%] sm:w-[250%] md:w-[150%] lg:w-full h-full bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: `url(${isommetricGrid})`,
        }}
      ></div>
      <main className="grow grid place-items-center">
        <div>
          <MiniGallery
            src={selectedBroskie.images}
            tags={selectedBroskie.tags}
            onImageSelected={(img) => {
              setSelectedImage(img);
            }}
          />

          <div className="flex justify-between items-center mt-5 ">
            <div className="flex flex-col gap-2">
              <div
                style={{
                  direction: "ltr",
                  width: "fit-content",
                  transform: "scaleX(-1)",
                }}
              >
                <Rating rating={selectedBroskie.rating} />
              </div>
              <h1 className="text-4xl font-bold">{selectedBroskie.name}</h1>
            </div>

            <article
              className="max-w-[50ch]"
              style={{
                direction:
                  getLang(selectedBroskie.quote) == "ar" ? "rtl" : "ltr",
              }}
            >
              <p>{selectedBroskie.quote}</p>
            </article>
          </div>
        </div>
      </main>

      <footer className="relative w-[75vw] rounded-xl bg-[#333333] overflow-hidden">
        <BroskiesBrowser
          className="flex w-max gap-2 justify-end items-center px-2 py-2"
          broskies={details.map((d) => ({ id: d.id, face: d.face }))}
          onBroskieChanged={broskieChangedHandler}
        />
      </footer>

      {/* <Lightbox
        isOpen={selectedImage !== ""}
        images={[
          {
            src: "https://dl.dropboxusercontent.com/scl/fi/a1pbtrvs1ptyysvyyzdg2/5.png?rlkey=qb6097m1o97hxfj8jx5elqv01&dl=0",
          },
        ]}
      /> */}
    </div>
  );
};

HomePage.propTypes = {
  details: PropTypes.array.isRequired,
};

export default HomePage;
