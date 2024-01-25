import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navigater = () => {
  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);
  const propertyID = useSelector((state) => state.property.id);
  const account = useSelector((state) => state.auth.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode == 0) navigate("/yieldestate");
    if (mode == 1) navigate("/rent");
    if (mode == 2) navigate("/buy");
    if (mode == 3) navigate("/dashboard");
  }, [mode, submode]);
};
