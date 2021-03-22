/* 
  imageGallery.js
  Author - Thilak Raj Soundararajan (thilkrajs@gmail.com)
*/

import React, { useState, useEffect } from "react";
import { LazyLoadComponent, trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Importing modal
import ImageDetails from "./imageDetails";

//CSS import for imageGallery
import "../assets/imageGallery.css";

const ImageGallery = (props) => {
// passing rover images as props from reducer
  const data = props.rover.photos === undefined ? [] : props.rover.photos;

//usestate for scroll position,modal open state and selected image item.
  const [scrollPosition1, setPosition] = useState(0);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);
  const [imageItem, setImageItem] = useState("");

//handles modal close
  const handleApplyModalClose = () => {
    setApplyModalOpen(false);
  };

//useEffect to find the scroll position and update it as the user scrolls through
  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

//opens the modal and sets the selected image to pass into the modal
  const handleModal = (imageItem) => {
    setImageItem(imageItem);
    setApplyModalOpen(true);
  };

  return (
    <div id="galleryWrap" spacing={1}>
      {data.map((item,key) => (
        <LazyLoadComponent id={key} scrollPosition={scrollPosition1}>
          <div id="galleryItem">
            <img
              src={item.img_src}
              alt={"Not Found"}
              onClick={() => handleModal(item)}
              id="thumbnail"
            />
          </div>
        </LazyLoadComponent>
      ))}

      <ImageDetails
        imageItem={imageItem}
        onClose={handleApplyModalClose}
        open={isApplyModalOpen}
      />
    </div>
  );
};

export default trackWindowScroll(ImageGallery);
