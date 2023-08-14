import { useState } from "react";
import useOnBackButton from "@hooks/useOnBackButton";

import Rating from "@components/Rating";
import BroskiesBrowser from "@components/BroskiesBrowser";
import MiniGallery from "@components/MiniGallery";
import Carousel from "@components/Carousel";
import useWindowWidth from "@hooks/useWindowWidth";
import PackedLightbox from "@components/PackedLightbox";

import PropTypes from "prop-types";

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

  // Close modal on back button
  useOnBackButton(() => {
    setLightboxSrcset(undefined);
  });

  return (
    <div className="container w-[90%] mx-auto h-full flex flex-col items-center">
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

      <footer className="relative w-[90vw] md:w-[75vw] rounded-lg md:rounded-xl bg-[#333333] overflow-scroll">
        <BroskiesBrowser
          className="flex w-max gap-1 md:gap-2 justify-end items-center p-1 md:p-2"
          broskies={details.map((d) => ({ id: d.id, face: d.face }))}
          onBroskieChanged={broskieChangedHandler}
        />
      </footer>

      <PackedLightbox
        srcSet={lightboxSrcset}
        onClose={() => setLightboxSrcset(undefined)}
      />
    </div>
  );
};

HomePage.propTypes = {
  details: PropTypes.array.isRequired,
};

export default HomePage;
