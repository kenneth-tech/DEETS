import React from 'react';
import '../../../css/HeroFeatures.css';

function HeroFeatures() {
  const discordAuth = () => {
    window.location.href = 'https://www.facebook.com/Deets-100231682304039';
  };
  const discordInvite = () => {
    window.location.href = 'https://discord.gg/Q34JB7k';
  };

  https: return (
    <>
      <div className="main-herofeatures">
        <h1 className="features-title">
          Experience the most feature rich Messenger Bot
        </h1>
        <p className="features-dec">
          DEETS is a messenger bot that will gather data for you.
        </p>
        <div className="container-features">
          <div className="features-1">
            <img src="./svg/Asset 20.svg" />
            <h2>Google Search</h2>
            <p>
              This features provide you a resources and let you search with your
              free data.
            </p>
          </div>
          <div className="features-2">
            <img src="./svg/Asset 19.svg" />
            <h2>Top Results Only</h2>
            <p>
              Deets will gather top results. These results are the most visited
              websites.
            </p>
          </div>
          <div className="features-3">
            <img src="./svg/Asset 18.svg" />
            <h2>Virus free</h2>
            <p> Virus-free, and no ads!</p>
          </div>
          <div className="features-4">
            <img src="./svg/Asset 22.svg" />
            <h2>Information Secure!</h2>
            <p>
              The bot will not gather any information on you. The bot will only
              gather resource for you!
            </p>
          </div>
        </div>
        <div className="discord-add">
          <div className="discord-container">
            <div className="discord-bg">
              <div>
                <h2>Add Deets to your Messenger Account !</h2>
                <p>Try our bot!</p>
                <div className="buttons-discord">
                  <button onClick={discordAuth}>
                    <i class="fab fa-facebook-messenger"></i>Like and Follow
                  </button>
                  {/* <button onClick={discordInvite}>
                    <i class="fab fa-discord"></i>Join to The plug
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroFeatures;
