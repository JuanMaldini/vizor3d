import React, { PropsWithChildren, useState } from "react";
import Sidebar from "react-sidebar";
import './PanelLateral.css';

type LineItem = string | { text: string; onClick?: () => void };
type CollapsibleSection = { title: string; lines: LineItem[]; defaultOpen?: boolean };

// Simple, scalable selector inputs
type SelectorGroup = {
  label: string;
  items?: string[]; // simple list
  categories?: { name: string; items: string[] }[]; // nested list
};

type PanelLateralProps = PropsWithChildren<{
  pullRight?: boolean;
  sidebarWidth?: number;
  mainText?: string;
  projectLines?: string[];
  sections?: CollapsibleSection[];
  panelDefaultOpen?: boolean;
  selectors?: SelectorGroup[];
  onSelect?: (payload: { group: string; category?: string; item: string }) => void;
}>;

const PanelLateral: React.FC<PanelLateralProps> = ({
  children,
  pullRight = false,
  sidebarWidth = 280,
  mainText,
  projectLines = [],
  sections = [],
  panelDefaultOpen = false,
  selectors = [],
  onSelect,
}) => {
  const [open, setOpen] = useState(panelDefaultOpen);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selOpenIndex, setSelOpenIndex] = useState<number | null>(null);
  // Track which category is open per selector group (only one open per group for simplicity)
  const [catOpenByGroup, setCatOpenByGroup] = useState<Record<number, number | null>>({});
  const handleSelect = onSelect ?? ((p: { group: string; category?: string; item: string }) => {
  });

  const Section: React.FC<PropsWithChildren<{ id: string; title: string; isOpen: boolean; onToggle: () => void }>> = ({ id, title, isOpen, onToggle, children }) => (
    <section className={`pl-section ${isOpen ? 'open' : 'closed'}`}>
      <button type="button" className="pl-section-header" aria-expanded={isOpen} aria-controls={`${id}-body`} onClick={onToggle}>
        <span className="pl-section-title">{title}</span>
        <span className="pl-section-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div id={`${id}-body`} className="pl-section-body">{children}</div>
      )}
    </section>
  );

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

          {sections.map((sec, idx) => {
            const id = `pl-sec-${sec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`;
            const isOpen = openIndex === idx;
            const onToggle = () => setOpenIndex(isOpen ? null : idx);
            return (
              <Section key={id} id={id} title={sec.title} isOpen={isOpen} onToggle={onToggle}>
                {sec.lines.map((line, i) => {
                  const item = typeof line === 'string' ? { text: line } : line;
                  const hasAction = typeof item.onClick === 'function';
                  return hasAction ? (
                    <button key={i} type="button" className="pl-item pl-item--action" onClick={item.onClick}>
                      {item.text}
                    </button>
                  ) : (
                    <div key={i} className="pl-item">{item.text}</div>
                  );
                })}
              </Section>
            );
          })}

          {/* Selector groups (collapsable, internal click handling) */}
          {selectors && selectors.length > 0 && (
            <div className="pl-selector-groups">
              {selectors.map((g, idx) => {
                const id = `pl-sel-${g.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`;
                const isOpen = selOpenIndex === idx;
                const onToggle = () => setSelOpenIndex(isOpen ? null : idx);
                return (
                  <section key={id} className={`pl-section ${isOpen ? 'open' : 'closed'}`}>
                    <button
                      type="button"
                      className="pl-section-header"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-body`}
                      onClick={onToggle}
                    >
                      <span className="pl-section-title">{g.label}</span>
                      <span className="pl-section-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div id={`${id}-body`} className="pl-section-body">
                        {g.categories && g.categories.length > 0 ? (
                          g.categories.map((cat, cIdx) => {
                            const catId = `${id}-cat-${cIdx}`;
                            const isCatOpen = (catOpenByGroup[idx] ?? null) === cIdx;
                            const onToggleCat = () =>
                              setCatOpenByGroup(prev => ({ ...prev, [idx]: isCatOpen ? null : cIdx }));
                            return (
                              <div key={catId} style={{ marginBottom: 8 }}>
                                <button
                                  type="button"
                                  className="pl-section-header"
                                  aria-expanded={isCatOpen}
                                  aria-controls={`${catId}-body`}
                                  onClick={onToggleCat}
                                >
                                  <span className="pl-section-title">{cat.name}</span>
                                  <span className="pl-section-icon" aria-hidden="true">{isCatOpen ? '−' : '+'}</span>
                                </button>
                                {isCatOpen && (
                                  <div id={`${catId}-body`} className="pl-section-body">
                                    {cat.items.map((it, i) => (
                                      <button
                                        key={`${catId}-it-${i}`}
                                        type="button"
                                        className="pl-item pl-item--action"
                                        onClick={() => handleSelect({ group: g.label, category: cat.name, item: it })}
                                      >
                                        {it}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          (g.items ?? []).map((it, i) => (
                            <button
                              key={`${id}-it-${i}`}
                              type="button"
                              className="pl-item pl-item--action"
                              onClick={() => handleSelect({ group: g.label, item: it })}
                            >
                              {it}
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          <div className="pl-project-lines">
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