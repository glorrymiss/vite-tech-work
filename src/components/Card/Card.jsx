import baseImg from "../../images/baseImg.png";
import logoImg from "../../images/logoImg.png";
import person from "../../images/person.png";
export const Card = () => {
  return (
    <div>
      <img src={logoImg} alt="qw" />
      <img src={baseImg} alt="qw" />
      <div></div>
      <img src={person} alt="qw" />
      <div>
        <p>tweets</p>
        <p>Followers</p>
      </div>
      <button>Follow</button>
    </div>
  );
};
