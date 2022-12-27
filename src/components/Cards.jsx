import "./Cards.css";
import {
  IoIosBookmarks,
  IoIosSpeedometer,
  IoIosInfinite,
  IoIosColorFilter,
  IoIosWine,
  IoIosPaperPlane,
} from "react-icons/io";

export default function Cards() {
  return (
    <>
      <div id="apresentacao">
        <div className="card">
          <IoIosBookmarks id="icon" />
          <h2 className="titleCards">Minimal Design</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosSpeedometer id="icon" />
          <h2 className="titleCards">Fast Loading</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosInfinite id="icon" />
          <h2 className="titleCards">Unlimited Possibilities</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
      </div>
      <div id="apresentacaoDois">
        <div className="card">
          <IoIosColorFilter id="icon" />
          <h2 className="titleCards">Component Based Design</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosWine id="icon" />
          <h2 className="titleCards">Clean Code</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosPaperPlane id="icon" />
          <h2 className="titleCards">LightWeight</h2>
          <p className="ads">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
        </div>
      </div>
    </>
  );
}
