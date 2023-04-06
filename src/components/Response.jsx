import { useContext } from "react";
import { Context } from "../context/Context";

const Response = () => {
    const { message } = useContext(Context)
  return (
    <div>
      <input type="text" value={message.message} readOnly />
    </div>
  );
};

export default Response;
