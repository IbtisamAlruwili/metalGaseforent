import "./Products.css";
import { NavLink } from "react-router-dom";
import explorationVideo from "../videos/production ID_5055608.mp4";
import img1 from "../images/kT1yJX5.jpg";
import img2 from "../images/pexels-anamul-rezwan-1145434.jpg";
import img3 from "../images/pexels-athena-3417668.jpg";
import img4 from "../images/pexels-lalesh-aldarwish-147635.jpg";
import img5 from "../images/pexels-mitchell-luo-3685210 (1).jpg";
import img6 from "../images/pexels-vedanti-242616.jpg";
import img7 from "../images/pexels-väinö-parjanen-3853870.jpg";
import img8 from "../images/pexels-pixabay-327049.jpg";
import img9 from "../images/pexels-pixabay-266896.jpg";
import img10 from "../images/pexels-pixabay-220237.jpg";
import img11 from "../images/pexels-pixabay-73833.jpg";
import img12 from "../images/pexels-pixabay-327041.jpg";

import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export default function Products(props) {
  const [imgsArr, setimgsArr] = useState([
    { img: img1, title: "(Mineral) is a natural compound formed during geological processes. The word refers not only to the chemical com." },
    { img: img2, title: "Processing various metals including copper and aluminum If you need graphics with a resolution of 0.01 mm or more" },
    { img: img3, title: "Mineral can be defined as a solid and inorganic substance found naturally in the earth, with a distinctive chemimestry..." },
    { img: img4, title: "It controls many of the natural properties of a mineral such as hardness, scratchiness, specific weight, and color.........." },
    { img: img5, title: "Carbon is found in nature in the form of diamond, which is the hardest known mineral. It is also found in the fo." },
    { img: img6, title: "Gases take many forms as they can consist of one atom such as neon and noble gases or consist of two united atom." },
    { img: img7, title: "LPG is very important, especially in the summer, as it is used in barbecue and is considered a real savior in so " },
    { img: img8, title: " This technology allows cutting metals with a thickness of up to 80 mm and more. The materials may be stone, glas" },
    { img: img9, title: "Toxic gases are considered gases that cause very great harm when inhaled or even when people are exposed to  " },
    { img: img10, title: " It controls many of the natural properties of a mineral such as hardness, scratchiness, specific weight, and co" },
    { img: img11, title: " This technology allows cutting metals with a thickness of up to 80 mm and more. The materials may be stone, gla" },
    { img: img12, title: " Carbon is found in nature in the form of diamond, which is the hardest known mineral. It is also found in the ." },
  ]);
  return (
    <>
      <div className="exploration-intro">
        <Navbar logOut={props.logOut} />
        <video
          className="w-100"
          autoPlay
          muted
          src={explorationVideo}
          type="video/mp4"
        ></video>
        <div className="intro-text">
          <h2 className="fs-sm-4">
            Welcome To <span className="main-color">Website</span>
          </h2>
          <p>
            We’re an architectural metal company that makes and installs
            building facades, decorative exteriors, custom railing, and really
            anything architectural you can imagine with metal.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {imgsArr.map((item) => (
            <div className="col-sm-12 col-md-4 col-lg-3 explore-item">
              <div
                style={{ backgroundColor: "#333" }}
                className="item text-center  text-light"
              >
                <img
                  className=" w-100 "
                  height="300px"
                  src={item.img}
                  alt="not found "
                />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
