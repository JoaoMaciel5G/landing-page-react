import Cards from "./Cards";
import "./FeatureComponent.css";
import Prices from "./Prices";
export default function FeaturesComponent() {
  return (
    <div id="container">
      <div className="paragraphFeatures">
        <p>features</p>
      </div>
      <div className="titleFeatures">
        <h2>App Features</h2>
      </div>
      <Cards/>
      <div className="paragraphFeatures">
        <p>Pricing</p>
      </div>
      <div className="titleFeatures">
        <h2>Choose Your Plans</h2>
      </div>
      <Prices/>
    </div>
  );
}
