interface CustomLinkProps { text: string; email: string; className?: string; subject?: string; body?: string; }
export const CustomLink: React.FC<CustomLinkProps> = ({ text, email, className, subject = 'Contact', body = 'Hello,' }) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + '\n')}`;
  return <a href={mailtoLink} className={className}>{text}</a>;
};

// Devuelve la URL de imagen adecuada según el ancho de pantalla
export function selectResponsiveImage(lowRes: string, highRes: string, breakpoint: number = 900): string {
  if (typeof window !== 'undefined') {
    return window.innerWidth > breakpoint ? highRes : lowRes;
  }
  return lowRes;
}
