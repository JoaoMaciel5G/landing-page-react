import "./Prices.css";

export default function Prices() {
  return (
    <div id="prices">
      <div className="cardPrice">
        <h2 className="titlePricing">Basic</h2>
        <p className="paragraphPricing">
          <span className="dolar">$</span>
          <span className="price">19</span>
          <span className="month">month</span>
        </p>
        <div className="apresentation">
            <p>Far far away, behind the word</p>
            <p>mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there</p>
            <p>live the blind texts</p>
        </div>
        <button className="btn">Get Started</button>
      </div>
      <div id="mainCard">
        <h2 className="titlePricing">Business</h2>
        <p className="paragraphPricing">
          <span className="dolar">$</span>
          <span className="price">39</span>
          <span className="month">month</span>
        </p>
        <div className="apresentation">
            <p>Far far away, behind the word</p>
            <p>mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there</p>
            <p>live the blind texts</p>
        </div>
        <button id="mainButton">Get Started</button>
      </div>
      <div className="cardPrice">
          <h2 className="titlePricing">Master</h2>
          <p className="paragraphPricing">
            <span className="dolar">$</span>
            <span className="price">99</span>
            <span className="month">month</span>
          </p>
          <div className="apresentation">
            <p>Far far away, behind the word</p>
            <p>mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there</p>
            <p>live the blind texts</p>
        </div>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}
