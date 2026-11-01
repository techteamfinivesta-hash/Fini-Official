
import "./bb.css";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdBzF2uxvI1VNnNr-IBf-2Q0b63KfUT0dyJg4L0fD_wyUfnKg/viewform?usp=publish-editor";

function BiddingBlitz() {
  return (
    <main className="bidding-blitz-page">
      <section className="banner"></section>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            BIDDING
            <br />
            <span>BLITZ.</span>
          </h1>

          <p className="hero-subtitle">
            THINK FAST. BID SMART. WIN BIG.
          </p>

          <p className="hero-description">
            The game is on. Are you ready to make your move?
          </p>

          <a
            className="button button-primary"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2>
            WHAT IS
            <br />
            <span>BIDDING BLITZ?</span>
          </h2>

          <div className="about-description">
            <p>
              Bidding Blitz is where strategy meets excitement.
              Put your decision-making skills to the test, compete
              with fellow participants, and make every bid count.
            </p>

            <p>
              From smart strategies to thrilling moments, get ready
              for an experience where every move matters.
              The details are coming soon.
            </p>

            <a
              className="button button-outline"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              I'm Interested <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="register" id="register">
        <span className="eyebrow">YOUR MOVE STARTS HERE</span>

        <h2>READY TO PLAY?</h2>

        <p>Secure your spot. Let the bidding begin.</p>

        <a
          className="button button-primary"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for Bidding Blitz 
        </a>
      </section>
    </main>
  );
}

export default BiddingBlitz;
