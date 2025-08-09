import React, { PropsWithChildren, useMemo, useState } from "react";
import Sidebar from "react-sidebar";
import './PanelLateral.css';

type CollapsibleSection = {
  title: string;
  lines: string[];
  defaultOpen?: boolean;
};

type PanelLateralProps = PropsWithChildren<{
  pullRight?: boolean;
  sidebarWidth?: number;
  mainText?: string;
  projectLines?: string[];
  sections?: CollapsibleSection[];
  panelDefaultOpen?: boolean; // define panel open/closed on mount
}>;

const PanelLateral: React.FC<PanelLateralProps> = ({
  children,
  pullRight = false,
  sidebarWidth = 280,
  mainText,
  projectLines = [],
  sections = [],
  panelDefaultOpen = false,
}) => {
  const [open, setOpen] = useState(panelDefaultOpen);
  const Section: React.FC<PropsWithChildren<{ title: string; defaultOpen?: boolean }>>
    = ({ title, defaultOpen = true, children }) => {
      const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
      const sectionId = useMemo(
        () => `pl-sec-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        [title]
      );
      return (
        <section className={`pl-section ${isOpen ? 'open' : 'closed'}`}>
          <button
            type="button"
            className="pl-section-header"
            aria-expanded={isOpen}
            aria-controls={`${sectionId}-body`}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="pl-section-title">{title}</span>
            <span className="pl-section-icon" aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </button>
          <div id={`${sectionId}-body`} className="pl-section-body" hidden={!isOpen}>
            {children}
          </div>
        </section>
      );
    };

  // simplified defaults: only render when props provided

  return (
    <Sidebar
      sidebarClassName="pl-sidebar-shell"
      sidebar={
        <div
          className="pl-sidebar"
          style={{ ['--pl-width' as any]: `${sidebarWidth}px` }}
        >
          <button className="pl-button" onClick={() => setOpen(false)} aria-label="Cerrar">Close</button>

          {mainText && (
            <div className="pl-desc">
              <p>{mainText}</p>
            </div>
          )}

          {sections.map((sec, idx) => (
            <Section key={idx} title={sec.title} defaultOpen={sec.defaultOpen}>
              {sec.lines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </Section>
          ))}

          <div>
            {projectLines && projectLines.length > 0 && (
              <div>
                {projectLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            )}

          </div>
        </div>
      }
      open={open}
      onSetOpen={setOpen}
      pullRight={pullRight}
    >
      {!open && (
        <div className={`pl-toggle ${pullRight ? 'pl-right' : ''}`}>
          <button className="pl-button" onClick={() => setOpen(true)} aria-label="Abrir">Open</button>          
        </div>
      )}
      {children}
    </Sidebar>
  );
};

export default PanelLateral;