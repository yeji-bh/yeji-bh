import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import CarouselBase, { Modal, ModalGateway } from "react-images";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(-1);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(-1);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <CarouselBase
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                caption: x.name
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
export default Carousel;