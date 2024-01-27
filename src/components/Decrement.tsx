import { useAppContext } from "../hooks/useAppContext";
const Decrement = () => {
  const { dispatch } = useAppContext();

  return (
    <button onClick={() => dispatch({ type: "DECREMENT" })}>
      Decrement (-)
    </button>
  );
};
export default Decrement;
