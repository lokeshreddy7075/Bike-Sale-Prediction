import "../styles/Home.css";

function Home() {

  return (

    <div className="home-container">

      {/* HERO SECTION */}

      <section className="hero">

        {/* LEFT */}

        <div className="hero-left">

          <h1 className="hero-title">

            Buy & Sell <span>Bikes</span> Easily

          </h1>

          <p className="hero-text">

            Discover thousands of used bikes,
            compare prices and sell your bike
            instantly using our AI powered marketplace.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Explore Bikes

            </button>

            <button className="secondary-btn">

              Sell Bike

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
            alt="bike"
          />

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">

          <h2>AI Price Prediction</h2>

          <p>

            Predict accurate selling prices
            using Machine Learning.

          </p>

        </div>

        <div className="feature-card">

          <h2>Verified Sellers</h2>

          <p>

            Buy bikes from trusted and verified
            bike owners.

          </p>

        </div>

        <div className="feature-card">

          <h2>Fast Selling</h2>

          <p>

            Post your bike in minutes and
            reach thousands of buyers.

          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;