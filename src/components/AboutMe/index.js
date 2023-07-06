import StyledAboutMe from "./AboutMe.Styled";
import beryll from "../assets/beryll.jpg";

function AboutMe() {
  return (
    <StyledAboutMe>
      <div>
        <div className="judul">
          <h1>Hello, This Page is About Me</h1>
          <p>Hi, my name is Beryll.</p>
          <p>I am a Student with a passion for Software Engineer.</p>
          <p>In my free time, I enjoy playing games.</p>
          <p>
            This website is a platform for me to share my knowledge and
            experiences in REACT.js
          </p>
          <p>
            Feel free to explore the content and get in touch with me if you
            have any questions or collaboration opportunities.
          </p>
        </div>
        <section>
          <div className="hero__left">
            <img src={beryll} alt="" />
          </div>
          <div className="hero__right">
            <h1>This is My Biodata</h1>
            <p>Name : Beryll Pradana Ramadhan</p>
            <p>Place, Date of Birth : Jakarta, October 30, 2003</p>
            <p>Gender : Male</p>
            <p>Religion : Islam</p>
            <p>Address : Jl.Dermaga Raya, Klender, East Jakarta</p>
            <p>
              High Education : Bachelor's degree In Computer Science, STT-NF,
              Depok
            </p>
            <p>Email : beryllpradanaramadhan17@gmail.com</p>
          </div>
        </section>
      </div>
    </StyledAboutMe>
  );
}

export default AboutMe;
