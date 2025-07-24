export const CustomLink: React.FC<{ text: string; email: string; className?: string }> = ({ text, email, className }) => {
  const subject = "Contact";
  const body = `Hello,

`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return <a href={mailtoLink} className={className}>{text}</a>;
};
