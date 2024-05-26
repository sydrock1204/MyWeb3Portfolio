// Import Assets
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Mihail " />

      <div className="header__content">
        <h1>Hi, I'm Mihail Florin </h1>
        <p>Blockchain Developer</p>
        <a href="mailto:sydneyrocky1204@outlook.com" className="button">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Header;
