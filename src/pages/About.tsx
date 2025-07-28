
import '../styles/aboutHero.css';
import Faq from '../components/Faq';
import logo from'../../public/Icons/logo.png'

const heroImages = [
  'https://placehold.co/500x350/181c24/fff?text=Vizor+3D',
  'https://placehold.co/500x350/23283a/fff?text=Experience',
  'https://placehold.co/500x350/1a1d29/fff?text=VFX+&+Tech',
  'https://placehold.co/500x350/222/fff?text=Visual+Solutions',
];

export default function About() {
  return (
      <main className="main-content">
        <section className="about-hero-row">
          <div className="about-hero-img-col">
            <img src={logo} alt="3D Team" className="about-hero-img" />
          </div>
          <div className="about-hero-text-col">
            <h1 className="about-hero-title">We are Vizor 3D</h1>
            <p className="about-hero-desc">
              We are a small team of professional developers and 3D artists dedicated to delivering the highest visual resolutions for your projects.
            </p>
          </div>
        </section>
        <section className="about-hero-row reverse">
          <div className="about-hero-img-col">
            <img src={heroImages[1]} alt="Experience" className="about-hero-img" />
          </div>
          <div className="about-hero-text-col">
            <h2 className="about-hero-title">Experience in 3D & Web</h2>
            <p className="about-hero-desc">
              With years of experience in 3D development and web technologies, we provide the best tools and solutions to bring your ideas to life and ensure your project stands out visually.
            </p>
          </div>
        </section>
        <section className="about-hero-row">
          <div className="about-hero-img-col">
            <img src={heroImages[2]} alt="VFX & Tech" className="about-hero-img" />
          </div>
          <div className="about-hero-text-col">
            <h2 className="about-hero-title">Professional Artists & Cutting-Edge Tech</h2>
            <p className="about-hero-desc">
              Our team includes top-tier artists skilled in real-time rendering, VFX, 3D modeling, Unreal Engine, and pixel streaming. We are passionate about delivering the best possible results for every project.
            </p>
          </div>
        </section>
        <section className="about-hero-row reverse">
          <div className="about-hero-img-col">
            <img src={heroImages[3]} alt="Visual Solutions" className="about-hero-img" />
          </div>
          <div className="about-hero-text-col">
            <h2 className="about-hero-title">Tailored Visual Solutions</h2>
            <p className="about-hero-desc">
              We study every project in detail to provide the most effective visual solutions and ensure a simple, impactful presentation for your audience.
            </p>
          </div>
        </section>
      <Faq />
      </main>
  );
}
