const Card = ({
  src,
  tag,
  onClick,
  disabled,
  id,
}: {
  src: string;
  tag: string;
  id: string;
  onClick: (id: string, tag: string) => void;
  disabled: boolean;
}) => {
  return (
    <div className="grid-item">
      <div
        className="thecard hover:cursor-pointer"
        id={id}
        onClick={() => {
          if (!disabled) onClick(tag, id);
        }}
      >
        <div className="front"></div>
        <div className="back">
          {" "}
          <img src={src} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
