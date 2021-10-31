import "./HeroPage.css"

function HeroPage() {
    return (
      <>
        <div className="cont">
          <div className="name_section">
            <p>Hey !</p>
            <h1>I'm Sheetal Sindhu</h1>
          </div>

          <div className="image_section">
            <img src="./images/heroimage.png" alt="hero-image" />
          </div>
        </div>
      </>
    );
}

export default HeroPage;