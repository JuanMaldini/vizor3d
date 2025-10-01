import { useNavigate } from 'react-router-dom';
import React, { useMemo, useEffect } from 'react';
import ReactPannellum from 'react-pannellum';

interface PannellumSetup {
  id: string;
  firstSceneId: string;
  first: {
    imageSource: string;
    config?: any;
  };
  scenes?: Record<string, any>;
}

interface ProjectCardProps {
  title: string;
  description: string;
  author: string;
  redirectPath?: string;
  seeMoreLink?: string;
  setup: PannellumSetup;
  fullSection?: boolean;
  blackIntensity?: number;
  blurIntensity?: number;
  hideInfo?: boolean;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  author,
  redirectPath,
  seeMoreLink,
  setup,
  fullSection = false,
  blackIntensity = 0,
  blurIntensity = 0,
  hideInfo = false,
  className = '',
}) => {
  const navigate = useNavigate();
  const hasRedirect = Boolean(redirectPath && redirectPath.trim());
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

  // Force pannellum to recalc size when using fullSection (after initial layout change)
  useEffect(() => {
    if (fullSection) {
      const timeout = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [fullSection, viewerId]);

  return (
    <div
      className={[
        'project-card',
        fullSection && 'project-card--full',
        hasRedirect && 'project-card--clickable',
        className
      ].filter(Boolean).join(' ')}
      onClick={hasRedirect ? handleClick : undefined}
      style={hasRedirect ? { cursor: 'pointer' } : undefined}
      aria-label={hasRedirect ? `Open ${title}` : undefined}
      role={hasRedirect ? 'a' : 'group'}
      tabIndex={hasRedirect ? 0 : -1}
      onKeyDown={hasRedirect ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } } : undefined}
    >
      <div className="project-card-viewer-wrapper" style={{ position: 'absolute', inset: 0 }}>
        <ReactPannellum
          id={viewerId}
          sceneId={setup.firstSceneId}
          imageSource={imageSource}
          config={preview}
        />
      </div>
      {/* Black overlay */}
      {blackIntensity > 0 && (
        <div
          className="project-card-mask"
          style={{ backgroundColor: `rgba(0,0,0,${Math.min(Math.max(blackIntensity, 0), 1)})` }}
        />
      )}
      {/* Blur overlay (uses backdrop-filter above pano + black layer) */}
      {blurIntensity > 0 && (
        <div
          className="project-card-blur"
          style={{ backdropFilter: `blur(${blurIntensity}px)` }}
        />
      )}
      {!hideInfo && (title || description || author) && (
        <div className="project-card-overlay" style={fullSection ? { inset: 0 } : undefined}>
          {title && <h3 className="project-card-title">{title}</h3>}
          {description && <p className="project-card-description">{description}</p>}
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
      )}
    </div>
  );
};

export default ProjectCard;

