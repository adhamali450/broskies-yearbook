import PropTypes from "prop-types";
import MiniImage from "@components/MiniImage";

const MiniGallery = ({ src, onImageSelected }) => {
  const imageClickedHandler = (img) => {
    onImageSelected(img);
  };

  return (
    <div className="img-grid grid-cols-[500px_250px_250px] grid-rows-[450px]">
      <div className="relative col-start-1">
        <MiniImage
          src={src[0]}
          verticalPosition={src[0][1]}
          onClick={imageClickedHandler}
        />

        <div className="absolute rounded-full bg-fuchsia-300 -bottom-1 right-15 w-72 h-72 filter blur-3xl opacity-60"></div>
        <div className="absolute rounded-full bg-[#22d3ee] -bottom-1 left-1 w-72 h-72 filter blur-3xl opacity-60"></div>
      </div>
      <div className="col-start-2 img-grid grid-rows-2">
        <MiniImage
          src={src[1][0]}
          verticalPosition={src[1][1]}
          onClick={imageClickedHandler}
        />
        <MiniImage
          src={src[2][0]}
          verticalPosition={src[2][1]}
          onClick={imageClickedHandler}
        />
      </div>
      <div className="relative col-start-3 img-grid grid-rows-[2fr_1fr]">
        <div className="absolute top-11 -right-16 rounded-full bg-[#bf0fff95] w-80 h-72 filter blur-2xl opacity-30"></div>
        <div className="absolute bottom-1 -left-1 rounded-full bg-[#570fff] w-80 h-72 filter blur-2xl opacity-30"></div>
        <MiniImage
          src={src[3][0]}
          verticalPosition={src[3][1]}
          onClick={imageClickedHandler}
        />
        <MiniImage
          src={src[4][0]}
          verticalPosition={src[4][1]}
          onClick={imageClickedHandler}
        />
      </div>
    </div>
  );
};

MiniGallery.propTypes = {
  src: PropTypes.array.isRequired,
  onImageSelected: PropTypes.func.isRequired,
};

export default MiniGallery;
