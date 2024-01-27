import { useAppContext } from "../hooks/useAppContext";
const DisplayValue = () => {
  const {
    state: { count },
  } = useAppContext();

  return (
    <div>
      <span>The Value is: {count} </span>
    </div>
  );
};

export default DisplayValue;
