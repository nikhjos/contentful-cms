import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            excepturi ut maxime tempore harum alias cupiditate perspiciatis
            eaque obcaecati, dignissimos nemo, corrupti ad voluptas expedita.
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="women" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
