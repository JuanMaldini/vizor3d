import { useNavigate } from 'react-router-dom';
import React, { useMemo } from 'react';
import ReactPannellum from 'react-pannellum';
import type { PannellumSetup } from '../types/PanoramasConfig/panellumConfig_SampleAI';

interface ProjectCardProps {
  title: string;
  description: string;
  author: string;
  redirectPath: string;
  seeMoreLink?: string;
  setup: PannellumSetup;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, author, redirectPath, seeMoreLink, setup }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(redirectPath);

  // Extraemos la primera escena y fusionamos config eliminando hotspots para preview
  const preview = useMemo(() => {
    const base = setup.first?.config || {};
    return {
      ...base,
      // Forzamos ciertos flags para mini visor / preview
      autoLoad: true,
      autoRotate: base.autoRotate ?? -2, // mantener autorotate (o usar -2 por defecto)
      showFullscreenCtrl: false,
      showZoomCtrl: false,
      showControls: false,
      mouseZoom: false,
      hotSpots: [], // ocultar hotspots en la card
    };
  }, [setup]);

  const imageSource = setup.first.imageSource;
  // ID único por card (evita colisiones si varios usan mismo setup.id)
  const viewerId = useMemo(() => `card-${title.replace(/\s+/g, '-').toLowerCase()}`, [title]);

  return (
    <div className="project-card" onClick={handleClick}>
      <ReactPannellum
        id={viewerId}
        sceneId={setup.firstSceneId}
        imageSource={imageSource}
        config={preview}
      />
      <div className="project-card-overlay">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {author && (
          seeMoreLink ? (
            <a
              href={seeMoreLink}
              className="project-card-author-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              {author}
            </a>
          ) : (
            <span
              className="project-card-author"
              style={{ cursor: 'pointer', color: '#ccc', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onClick={e => { e.stopPropagation(); navigate(redirectPath); }}
            >
              {author}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

