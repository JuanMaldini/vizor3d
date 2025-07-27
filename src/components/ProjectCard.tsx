import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  author: string;
  redirectPath: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, author, redirectPath, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="project-card-overlay">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {author && <p className="project-card-author">{author}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
