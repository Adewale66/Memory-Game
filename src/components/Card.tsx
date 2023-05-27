import { useState } from "react";

const Card = ({
  src,
  tag,
  id,
  gameStarted,
}: {
  src: string;
  tag: string;
  id: string;
  gameStarted: boolean;
}) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    document.getElementById(id)?.classList.add("flip");
    setClicked(true);
  }
  return (
    <div className="grid-item">
      <span className="hidden">{tag}</span>
      <button
        className="thecard"
        id={id}
        onClick={handleClick}
        disabled={clicked || gameStarted}
      >
        <div className="front"></div>
        <div className="back">
          {" "}
          <img src={src} alt="logo" />
        </div>
      </button>
    </div>
  );
};

export default Card;
