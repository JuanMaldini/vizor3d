import { asset } from "../../../components/functions";
import "../../../styles/Projects.css";
import MindarViewer from "./mindar-viewer";
import { useNavigate } from "react-router-dom";

type Props = {};

function AR_Template({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="projects2-main">
      <section className="projects2-hero">
        <h1 className="projects2-title">Image base tracking</h1>
        <p className="projects2-desc">
          Use your mobile device, point your camera at the image provided.
        </p>
        <a
          className="btn btn-secondary"
          onClick={() => navigate("/ar-template-location")}
        >
          Place here
        </a>
      </section>

      <section className="projects2-section">
        <div className="ar-viewer-container">
          <MindarViewer
            modelSrc={asset("3dmodels/dry_flower.glb")}
            modelPosition="0 -1.2 0"
            modelRotation="0 0 0"
            modelScale="10 10 10"
            imageTargetSrc={asset("mindar/targets.mind")}
            targetIndex={0}
          />
        </div>
      </section>
    </div>
  );
}

export default AR_Template;
