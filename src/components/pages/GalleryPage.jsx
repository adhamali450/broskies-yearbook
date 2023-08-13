import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MiniImage from "@components/MiniImage";
import { imageClickedHandler } from "@/utils";
import PackedLightbox from "@components/PackedLightbox";

import PropTypes from "prop-types";

const GalleryPage = ({ images }) => {
  const [lightboxSrcset, setLightboxSrcset] = useState(undefined);

  // To allow first images to intersect and show
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <div className="relative h-full flex flex-col ">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
        <Masonry gutter="10px">
          {images.map((_, i) => (
            <MiniImage
              className="w-full block"
              key={i}
              src={images[i]}
              blur={10}
              lazyLoad
              aspectRatio={images[i][2]}
              preserveAspectRatio
              style={{
                aspectRatio: images[i][2],
                cursor: "zoom-in",
              }}
              onClick={(img) =>
                imageClickedHandler(images, img, setLightboxSrcset)
              }
              lazyLoaded
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <PackedLightbox
        srcSet={lightboxSrcset}
        onClose={() => setLightboxSrcset(undefined)}
      />
    </div>
  );
};

GalleryPage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};

export default GalleryPage;
