export const CustomLink: React.FC<{ text: string; email: string; className?: string }> = ({ text, email, className }) => {
  const subject = "Contact";
  const body = `Hello,

`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return <a href={mailtoLink} className={className}>{text}</a>;
};

// Devuelve la URL de imagen adecuada según el ancho de pantalla
export function selectResponsiveImage(lowRes: string, highRes: string, breakpoint: number = 900): string {
  if (typeof window !== 'undefined') {
    return window.innerWidth > breakpoint ? highRes : lowRes;
  }
  return lowRes;
}
