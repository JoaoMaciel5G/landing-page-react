import Cards from "./Cards";
import "./FeatureComponent.css";
import Prices from "./CardPrices";
import Title from "./Title";
export default function FeaturesComponent() {
  return (
    <div id="container">
      <Title titulo="App Features" paragrafo="features"/>
      <Cards/>
      <Title titulo="Choose Your Plans" paragrafo="pricing"/>
      <Prices/>
    </div>
  );
}
