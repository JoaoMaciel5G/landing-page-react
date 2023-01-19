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
      <div className="apresentacao">
        <div className="card">
          <IoIosBookmarks className="icon" />
          <h2 className="titleCards">Minimal Design</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosSpeedometer className="icon" />
          <h2 className="titleCards">Fast Loading</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosInfinite className="icon" />
          <h2 className="titleCards">Unlimited Possibilities</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="apresentacao">
        <div className="card">
          <IoIosColorFilter className="icon" />
          <h2 className="titleCards">Component Based Design</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosWine className="icon" />
          <h2 className="titleCards">Clean Code</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="card">
          <IoIosPaperPlane className="icon" />
          <h2 className="titleCards">LightWeight</h2>
          <p className="ads">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </>
  );
}
