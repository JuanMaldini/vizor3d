import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pannellum } from 'pannellum-react';

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



  return (
    <div
      className="project-card"
      onClick={handleClick}
    >
                  <Pannellum
            
                // className="project-card"
                image={image}
                // @ts-ignore
                pitch={p}
                yaw={y}
                hfov={100}
                // autoRotate={-2}
                autoLoad
                autoRotate={-2}
                mouseZoom={false}
                showFullscreenCtrl={false}
                showControls={false}
                // compass
                // disableKeyboardCtrl
                // @ts-ignore
                // ref={panImage}

            ></Pannellum>
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
