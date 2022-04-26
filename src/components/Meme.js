import React from "react";

const Meme = () => {
  const [memeState, setMemeState] = React.useState({
    topText: ``,
    bottomText: ``,
    randomImage: ``,
  });
  const [allMemes, setAllMemes] = React.useState();

  const getDataAsc = async () => {
    const response = await fetch(`https://api.imgflip.com/get_memes`);
    const json = await response.json();
    setAllMemes(json.data.memes);
  };

  React.useEffect(() => {
    getDataAsc();
  }, []);

  const getText = (event) => {
    const { name, value } = event.target;
    setMemeState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getNewRandomImage = () => {
    const rng = Math.floor(Math.random() * allMemes.length);
    return allMemes[rng].url;
  };

  const click = () => {
    const randomImage = getNewRandomImage();
    setMemeState((state) => ({ ...state, randomImage }));
  };

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={memeState.topText}
          onChange={getText}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={memeState.bottomText}
          onChange={getText}
        />

        <button onClick={click.bind(this)} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={memeState.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeState.topText}</h2>
        <h2 className="meme--text bottom">{memeState.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
