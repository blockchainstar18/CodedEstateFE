import "../css/Toggle.css";

export const Toggle = ({ status, onChange }) => {
  const toggle = !status ? "toggleLeft" : "toggleRight";
  return (
    <div className={`toggle  ${toggle}`} onClick={onChange}>
      <div className="toggleContent shadow-md"></div>
    </div>
  );
};
