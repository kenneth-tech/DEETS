import React from 'react';
import '../../../css/Content.css';

function Content() {
  return (
    <>
      <div className="main-content">
        <h1>THE DEETS WAS CRAFTED TO BE FEATURE-FULL AND EASY TO USE</h1>
        <div className="content">
          <div className="content-1">
            <h1>Google Search</h1>
            <p>
              The search feature is one of the best functions of the bot. It
              will gather all posible resource for the query given in the search
              commands.
            </p>
          </div>
          <div className="content-2">
            <i class="fas fa-search"></i>
          </div>
          <div className="content-3">
            <i class="fas fa-newspaper"></i>
          </div>
          <div className="content-4">
            <h1>NEWS</h1>
            <p>
              This feature allows you to search the top trending news here in
              the philippines and give you news as many as you want to know.
            </p>
          </div>
          <div className="content-5">
            <h1>WEATHER</h1>
            <p>
              This Feature allows you to search the temperature, description
              etc. for the place you want to know the weather condition.
            </p>
          </div>
          <div className="content-6">
            <i class="fas fa-bolt"></i>
          </div>
          <div className="content-6">
            <i class="fas fa-location-arrow"></i>
          </div>
          <div className="content-4">
            <h1>PLACES</h1>
            <p>
              This feature allows you to search all the places you want to
              search Like Bank and etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
