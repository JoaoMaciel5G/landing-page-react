import "./Title.css";

export default function Title({titulo, paragrafo}) {
  return (
    <>
        <div className="paragraphFeatures">
            <p>{paragrafo}</p>
        </div>
        <div className="titleFeatures">
            <h2>{titulo}</h2>
        </div>
    </>
  );
}