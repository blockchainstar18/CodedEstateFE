import checkedIcon from "../assets/images/checkbox/checked.png";
import uncheckedIcon from "../assets/images/checkbox/unchecked.png";

export const Checkbox = ({ checked, onChange = () => {} }) => {
  return (
    <div>
      {checked ? (
        <img
          src={checkedIcon}
          onClick={() => onChange(!checked)}
          className="cursor-pointer"
        ></img>
      ) : (
        <img
          src={uncheckedIcon}
          onClick={() => onChange(!checked)}
          className="cursor-pointer"
        ></img>
      )}
    </div>
  );
};
