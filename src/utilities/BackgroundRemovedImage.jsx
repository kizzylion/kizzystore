import { removeBackgroundFromImage } from "./utilities";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BackgroundRemovedImage = ({ imageUrl, alt }) => {
  const [removedImageUrl, setRemovedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRemovedBackgroundImage = async () => {
      setLoading(true);
      setError("");
      try {
        const url = await removeBackgroundFromImage(imageUrl);
        setRemovedImageUrl(url);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (imageUrl) {
      fetchRemovedBackgroundImage();
    }
  }, [imageUrl]);

  return (
    <div>
      {loading && <p>Removing background...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* {imageUrl && (
        <div>
          <h2>Original Image</h2>
          <img src={imageUrl} alt="Original" style={{ width: "300px" }} />
        </div>
      )} */}

      {removedImageUrl && (
        <img
          src={removedImageUrl}
          style={{ width: "300px" }}
          loading="lazy"
          draggable="false"
          alt={alt}
        />
      )}
    </div>
  );
};

export default BackgroundRemovedImage;

BackgroundRemovedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
