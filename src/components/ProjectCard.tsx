import { useNavigate } from 'react-router-dom';
import React, { useMemo } from 'react';
import ReactPannellum from 'react-pannellum';
import type { PannellumSetup } from '../types/PanoramasConfig/panellumConfig_SampleAI';

interface ProjectCardProps {
  blurIntensity?: number;
  title: string;
  description: string;
  author: string;
  redirectPath?: string;
  seeMoreLink?: string;
  setup: PannellumSetup;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, author, redirectPath, seeMoreLink, setup }) => {
  const navigate = useNavigate();
  const hasRedirect = !!redirectPath && redirectPath.trim().length > 0;
  const handleClick = () => {
    if (hasRedirect) navigate(redirectPath!);
  };

  const preview = useMemo(() => {
    const base = setup.first?.config || {};
    return {
      ...base,
      autoLoad: true,
      autoRotate: base.autoRotate ?? -2,
      showFullscreenCtrl: false,
      showZoomCtrl: false,
      showControls: false,
      mouseZoom: false,
      hotSpots: [],
    };
  }, [setup]);

  const imageSource = setup.first.imageSource;
  const viewerId = useMemo(() => `card-${title.replace(/\s+/g, '-').toLowerCase()}`, [title]);

  return (
    <div
      className={`project-card${hasRedirect ? ' project-card--clickable' : ''}`}
      onClick={hasRedirect ? handleClick : undefined}
      style={hasRedirect ? { cursor: 'pointer' } : undefined}
      aria-label={hasRedirect ? `Open ${title}` : undefined}
      role={hasRedirect ? 'button' : 'group'}
      tabIndex={hasRedirect ? 0 : -1}
      onKeyDown={hasRedirect ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } } : undefined}
    >
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
          ) : hasRedirect ? (
            <span
              className="project-card-author"
              style={{ cursor: 'pointer', color: '#ccc', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onClick={e => { e.stopPropagation(); handleClick(); }}
            >
              {author}
            </span>
          ) : (
            <span className="project-card-author" style={{ color: '#ccc' }}>
              {author}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

