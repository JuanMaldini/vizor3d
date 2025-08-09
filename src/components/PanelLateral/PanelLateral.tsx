import React, { PropsWithChildren, useState } from "react";
import Sidebar from "react-sidebar";
import './PanelLateral.css';

type PanelLateralProps = PropsWithChildren<{
  pullRight?: boolean;
  sidebarWidth?: number;
}>;

const PanelLateral: React.FC<PanelLateralProps> = ({
  children,
  pullRight = false,
  sidebarWidth = 280,
}) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState<string>('Architecture');

  const Section: React.FC<PropsWithChildren<{ title: string; defaultOpen?: boolean }>>
    = ({ title, defaultOpen = true, children }) => {
      const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
      return (
        <section className={`pl-section ${isOpen ? 'open' : 'closed'}`}>
          <button className="pl-section-header" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
            <span className="pl-section-title">{title}</span>
            <span className="pl-section-toggle" aria-hidden>{isOpen ? '−' : '+'}</span>
          </button>
          {isOpen && <div className="pl-section-body">{children}</div>}
        </section>
      );
    };

  return (
    <Sidebar
      sidebarClassName="pl-sidebar-shell"
      sidebar={
        <div
          className="pl-sidebar"
          style={{ ['--pl-width' as any]: `${sidebarWidth}px` }}
        >
          <button className="pl-button" onClick={() => setOpen(false)} aria-label="Cerrar">Close</button>

          <div className="pl-desc">
            <p>
              Simple panel with project info: architects and the house, 3D artist collaboration,
              areas to explore, and focused aspects of the architecture.
            </p>
          </div>

          <div>

            <div>
              <div >Project</div>
              <div >Architect Example Studio</div>
              <div >Location Buenos Aires, AR</div>
              <div >Year 2025</div>
              <div >Type Single-family house</div>
            </div>

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