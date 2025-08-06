import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ReactPannellum } from 'react-pannellum';

interface ProjectCardProps {
  title: string;
  description: string;
  author: string;
  redirectPath: string;
  image: string;
  seeMoreLink?: string;
  p: number;
  y: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, author, redirectPath, image, seeMoreLink, p, y }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(redirectPath);
  };
 
  // Configuración moderna para react-pannellum
  const config = {
    pitch: p,
    yaw: y,
    hfov: 100,
    autoLoad: true,
    autoRotate: -2,
    mouseZoom: false,
    showFullscreenCtrl: false,
    showControls: false,
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <ReactPannellum
        id={title.replace(/\s+/g, '-')}
        sceneId="scene"
        imageSource={image}
        config={config}
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

