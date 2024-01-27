import { useAppContext } from "../hooks/useAppContext";
const Increment = () => {
  const { dispatch } = useAppContext();

  return (
    <button onClick={() => dispatch({ type: "INCREMENT" })}>
      INCREMENT (+)
    </button>
  );
};
export default Increment;
