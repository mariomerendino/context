import { useAppContext } from "../hooks/useAppContext";
const DisplayValue = () => {
  const {
    state: { count },
  } = useAppContext();

  return <span>The Value is: {count} </span>;
};

export default DisplayValue;
