import React from 'react';
import '../../../css/Hero.css';

function Hero() {
  const discordAuth = () => {
    window.location.href =
      'https://www.facebook.com/messages/t/100231682304039';
  };
  return (
    <>
      <div className="main-hero">
        <div className="hero-container">
          <h1>This is Deets.</h1>
          <p>A feature-rich, easy to use Messenger Bot!</p>

          <button onClick={discordAuth}>
            <i class="fab fa-facebook-messenger"></i>add to Messenger
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
