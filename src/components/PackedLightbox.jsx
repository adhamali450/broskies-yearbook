import useOnBackButton from "@hooks/useOnBackButton";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import PropTypes from "prop-types";

const PackedLightbox = ({ srcSet, onClose }) => {
  // Close modal on back button
  useOnBackButton(() => {
    onClose();
  });

  return (
    <Lightbox
      open={srcSet}
      close={onClose}
      slides={srcSet?.map((img) => ({
        src: img,
        downloadFilename: img.split("/").pop() + ".jpg",
      }))}
      controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      plugins={[Download, Zoom]}
      className="ltr"
    />
  );
};

PackedLightbox.propTypes = {
  srcSet: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func.isRequired,
};

export default PackedLightbox;
