import { memo } from "react";
import PropTypes from "prop-types";
import MiniImage from "@components/MiniImage";
import Badges from "@components/Badges";
import { imageClickedHandler } from "@/utils";

const MiniGallery = ({ className = "", src, onImageSelected, tags }) => {
  return (
    <div
      className={`${className} img-grid grid-cols-[400px_200px_200px] xl:grid-cols-[500px_250px_250px] grid-rows-[450px]`}
    >
      <div className="relative col-start-1">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <MiniImage
            className="w-full h-full  z-10 rounded-xl cursor-zoom-in"
            src={src[0].slice(0, 2)}
            verticalPosition={src[0][2]}
            onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
            blur={6}
          />

          {tags && (
            <div className="z-20 absolute inset-0 bg-gradient-to-t from-rgba-black-0.8 via-transparent to-transparent p-5 flex items-end pointer-events-none">
              <Badges
                className="max-w-[400px] flex flex-wrap gap-1"
                tags={tags}
              />
            </div>
          )}
        </div>

        <div className="absolute rounded-full bg-fuchsia-300 -bottom-1 right-15 w-72 h-72 filter blur-3xl opacity-60"></div>
        <div className="absolute rounded-full bg-[#22d3ee] -bottom-1 left-1 w-72 h-72 filter blur-3xl opacity-60"></div>
      </div>
      <div className="col-start-2 img-grid grid-rows-2">
        <MiniImage
          className="z-10 rounded-xl cursor-zoom-in"
          src={src[1].slice(0, 2)}
          verticalPosition={src[1][2]}
          onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
          blur={6}
        />
        <MiniImage
          className="z-10 rounded-xl cursor-zoom-in"
          src={src[2].slice(0, 2)}
          verticalPosition={src[2][2]}
          onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
          blur={6}
        />
      </div>
      <div className="relative col-start-3 img-grid grid-rows-[2fr_1fr]">
        <div className="absolute top-11 -right-16 rounded-full bg-[#bf0fff95] w-80 h-72 filter blur-2xl opacity-30"></div>
        <div className="absolute bottom-1 -left-1 rounded-full bg-[#570fff] w-80 h-72 filter blur-2xl opacity-30"></div>
        <MiniImage
          className="z-10 rounded-xl cursor-zoom-in"
          src={src[3].slice(0, 2)}
          verticalPosition={src[3][2]}
          onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
          blur={6}
        />
        <MiniImage
          className="z-10 rounded-xl cursor-zoom-in"
          src={src[4].slice(0, 2)}
          verticalPosition={src[4][2]}
          onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
          blur={6}
        />
      </div>
    </div>
  );
};

MiniGallery.propTypes = {
  className: PropTypes.string,
  src: PropTypes.array.isRequired,
  onImageSelected: PropTypes.func.isRequired,
  tags: PropTypes.array,
};

const memomized = memo(MiniGallery, (prev, next) =>
  prev.src.every((src, i) => src[0] === next.src[i][0])
);

export default memomized;
