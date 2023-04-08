import React, { useState } from "react";
import "./style.css";
import { images } from "../../mock";
import cross from "../../images/close.png";

const Gallery = () => {
  const [img, setImg] = useState("");

  const [modal, setModal] = useState(false);

  const handleChange = (img) => {
    setImg(img);
    setModal(true);
  };

  return (
    <div className="ModalApp">
      <div className={modal ? "modalOpen" : "modal"}>
        <img src={img} alt="" />
        <img
          src={cross}
          alt=""
          className="cross"
          onClick={() => setModal(false)}
        />
      </div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <div className="pictures" key={index}>
            <img src={img.img} alt="" onClick={() => handleChange(img.img)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
