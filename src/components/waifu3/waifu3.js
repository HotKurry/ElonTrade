import React from 'react';




var waifutemp = {
    imageSrc: 'http://localhost:3000/sidelook.jpg',
    name: 'Guilty Elon',
    media: 'Anime',
    source: 'Pokémon',
    flavortext: '"Tesla stock price is too high imo"',
    Partner: 'Buy sTSLA',
    rating: 2069,
    Value: 4339
  };
  class waifu3 extends React.Component {
    render() {
        return(
          <div className="Cardbox">
      <div className="waifu">
        <div className="image-container">
          <img src={waifutemp.imageSrc} alt=''/>
        </div>
        <h2>{waifutemp.name}</h2>
        <div className="wifu-info">
          <div className="waifu-address">
          </div>
          <div className="value-info">
            <p></p>
          </div>
        </div>
          <div className="flavor-info">
            <p>{waifutemp.flavortext}</p>  
          </div>
          </div>
          <div className="card-info">
              <a>{waifutemp.Partner}</a>
        </div>
      </div>
      

    )
    }
}
export default waifu3;

