import qr from "../../../../public/Icons/qr-code.svg";
import "../../../styles/Projects.css";
import { useNavigate } from "react-router-dom";
type Props = {};

function AR_Template_Location({}: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <a
          style={{ display: "flex", justifyContent: "center" }}
          className="btn btn-secondary"
          onClick={() => navigate("/ar-template")}
        >
          Back
        </a>
        <h2 className="">Point your camera here with the app </h2>
        <img className="qr-image" style={{ marginBottom: "1rem" }} src={qr} />
      </div>
    </div>
  );
}
export default AR_Template_Location;
