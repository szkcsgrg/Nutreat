import { Link } from "react-router-dom";
import dots from "../images/dots.svg";
import left from "../images/landing_left.svg";
import right from "../images/landing_right.svg";
import contact_right from "../images/contact_right.svg";
import contact_image from "../images/contact_image.svg";
import contact from "../images/contact.svg";

function Home() {
  return (
    <section className="home">
      <div className="landing">
        <h1>
          Egészséges gyors étterem. <br /> Teljes tápértékű főételek. <br />{" "}
          Snackek, Sütemények, Turmixok.
        </h1>
        <button className="button_style_1">
          <Link>Menü</Link>
        </button>
        <button className="button_style_2">
          <Link>Kapcsolat</Link>
        </button>
        <img
          id="little_dots"
          src={dots}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />

        <img
          id="shape_left"
          src={left}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />
        <img
          id="shape_right"
          src={right}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />
      </div>
      <div className="contact">
        <img
          id="contact_shape_right"
          src={contact_right}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />
        <img
          id="contact_image"
          src={contact_image}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />
        <img
          id="contact"
          src={contact}
          alt="Design Element. In certain webbrowsers it might not be visible."
        />

        <h2>Elerhetosegek</h2>
      </div>
    </section>
  );
}

export default Home;
