import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
function SetValue() {
  const { dispatch } = useAppContext();
  const [value, setValue] = useState<number | null>();

  const onSubmit = () => {
    if (value) {
      dispatch({ type: "SET_VALUE", value: value });
      setValue(null);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="Set the value"
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default SetValue;
