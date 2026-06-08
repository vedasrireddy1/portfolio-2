import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={profile} alt="Vedasri Reddy" className="profile-img" />

      <h1>Hello, I'm Vedasri Reddy</h1>

      <h2>Frontend Developer</h2>

      <p>
        Passionate about building modern and responsive
        websites using React, HTML, CSS and JavaScript.
      </p>
    </section>
  );
}

export default Hero;