import React from 'react';
import '../../css/Commands.css';

function Commands() {
  const discordAuth = () => {
    window.location.href = 'https://www.facebook.com/Deets-100231682304039';
  };
  const discordInvite = () => {
    window.location.href = 'https://discord.gg/Q34JB7k';
  };
  return (
    <>
      <div className="main-commands">
        <h1>
          DEETS has every command you need to have a great messenger bot
          experience
        </h1>
        <table className="commands-table">
          <tr>
            <th>!search</th>
            <td>Give you the posible definition for a word you search </td>
          </tr>
          <tr>
            <th>!searchplace</th>
            <td>Search in place category only.</td>
          </tr>
          <tr>
            <th>!searchbank</th>
            <td>Search in bank category only.</td>
          </tr>
          <tr>
            <th>!searchpolicestation</th>
            <td>Search in police station category only.</td>
          </tr>
          <tr>
            <th>!searchfirestation</th>
            <td>Search in fire station category only.</td>
          </tr>
          <tr>
            <th>!searchhospital</th>
            <td>Search in hospital category only</td>
          </tr>
          <tr>
            <th>!searchdrugstore</th>
            <td>Search in drugstore category only.</td>
          </tr>
          <tr>
            <th>!searchgasstation</th>
            <td>Search in gas station category only.</td>
          </tr>
          <tr>
            <th>!searchbusstation</th>
            <td>Search in bus station category only.</td>
          </tr>
          <tr>
            <th>!searchpostoffice</th>
            <td>Search in post office category only.</td>
          </tr>
          <tr>
            <th>!searchchurch</th>
            <td>Search in church category only.</td>
          </tr>
          <tr>
            <th>!commandlist</th>
            <td>Change the server prefix.</td>
          </tr>
          <tr>
            <th>!news</th>
            <td>Search in philippine top trending news category only.</td>
          </tr>
          <tr>
            <th>!weather</th>
            <td>Search in posible weather category only.</td>
          </tr>
        </table>
        <div className="discord-add">
          <div className="discord-container">
            <div className="discord-bg">
              <div>
                <h2>Add Deets to your Messenger Account!</h2>
                <p>Try our bot!</p>
                <div className="buttons-discord">
                  <button onClick={discordAuth}>
                    <i class="fab fa-facebook-messenger"></i>Like and Follow
                  </button>
                  {/* <button onClick={discordInvite}>
                    <i class="fab fa-facebook-messenger"></i>Join to The plug
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

export default Commands;
