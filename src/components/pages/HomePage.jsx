import { useState, useEffect } from "react";
import Rating from "@components/Rating";
import BroskiesBrowser from "@components/BroskiesBrowser";
import MiniGallery from "@components/MiniGallery";
import Carousel from "@components/Carousel";
import useWindowWidth from "@hooks/useWindowWidth";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

import PropTypes from "prop-types";

// import isommetricGrid from "@assets/isometric-grid.svg";

import { getLang } from "@utils";
const HomePage = ({ details }) => {
  const width = useWindowWidth();

  const [selectedBroskie, setSelectedBroskie] = useState(
    details.find((d) => d.id === 0)
  );
  const [lightboxSrcset, setLightboxSrcset] = useState(undefined);

  const broskieChangedHandler = (id) => {
    setSelectedBroskie(details.find((d) => d.id === id));
  };

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <div className="container w-[90%] mx-auto h-full flex flex-col items-center">
      {/* <div
        className="absolute -z-10 opacity-50 -translate-x-1/2 left-1/2 bottom-0 w-[300%] sm:w-[250%] md:w-[150%] lg:w-full h-full bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: `url(${isommetricGrid})`,
        }}
      ></div> */}
      <main className="grow w-full lg:w-auto grid place-items-center">
        <div className="w-full">
          {
            // If the screen is small, use the carousel
            width >= 1100 ? (
              <MiniGallery
                src={selectedBroskie.images}
                tags={selectedBroskie.tags}
                onImageSelected={(srcset) => {
                  setLightboxSrcset(srcset);
                }}
              />
            ) : (
              <Carousel
                className="h-[70vh]"
                src={selectedBroskie.images}
                memberDetails={selectedBroskie}
                onImageSelected={(srcset) => {
                  setLightboxSrcset(srcset);
                }}
              />
            )
          }

          {width >= 1100 && (
            <div className="flex justify-between items-center mt-5 ">
              <div className="flex flex-col gap-2">
                <Rating rating={selectedBroskie.rating} />
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
          )}
        </div>
      </main>

      <footer className="relative w-[90vw] md:w-[75vw] rounded-lg md:rounded-xl bg-[#333333] overflow-hidden">
        <BroskiesBrowser
          className="flex w-max gap-1 md:gap-2 justify-end items-center p-1 md:p-2"
          broskies={details.map((d) => ({ id: d.id, face: d.face }))}
          onBroskieChanged={broskieChangedHandler}
        />
      </footer>

      <Lightbox
        open={lightboxSrcset}
        close={() => setLightboxSrcset(undefined)}
        slides={lightboxSrcset?.map((img) => ({
          src: img,
          downloadFilename: img.split("/").pop() + ".jpg",
        }))}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        plugins={[Download]}
        className="ltr"
      />
    </div>
  );
};

HomePage.propTypes = {
  details: PropTypes.array.isRequired,
};

export default HomePage;
