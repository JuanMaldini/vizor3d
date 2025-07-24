import React from 'react';
import { Pannellum } from 'pannellum-react';
import { useNavigate } from 'react-router';
import '../components.css';
import './ProjectCard.css';

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
    <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Pannellum
        width="100%"
        height="100%"
        image={image}
        pitch={10} // Adjust pitch to focus on a specific part of the image
        yaw={180} // Adjust yaw to focus on a specific part of the image
        hfov={110} // Field of view
        autoLoad
        disableKeyboardCtrl
      />
      <div className="project-card-overlay">
        <h1 className="project-card-title">{title}</h1>
        <p className="project-card-description">{description}</p>
        <p className="project-card-author">{author}</p>
      </div>
    </div>
  );
};

export default ProjectCard;