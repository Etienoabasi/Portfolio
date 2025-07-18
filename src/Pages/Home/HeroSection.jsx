export default function HeroSection() {
  return ( 
   <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I'm Etienoabasi</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Frontend</span>{" "}
          <br />
          Developer
        </h1>
        <p className="hero--section-description">
          Hi, I'm Etienoabasi Asangag a frontend developer passionate about building responsive,
          <br /> user-friendly websites using HTML, CSS, JavaScript, and React.
        </p>
      </div>
      <a href="mailto:etienoabasiasanga@gmail.com">
      <button className="btn btn-primary">Get In Touch</button>
      </a>
      </div>
    <div className="hero--section--img">
      <img src="./image/myimage.png" alt="Hero Section"/>
    </div>
   </section>
  );
}
