import { useState } from "react";
import { Verify } from "./Verify";
import { Profile } from "./Profile";

export const Account = () => {
  const [flag, setFlag] = useState(false);
  return <>{!flag ? <Verify /> : <Profile />}</>;
};
