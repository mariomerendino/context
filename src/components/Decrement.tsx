import { useAppContext } from "../hooks/useAppContext";
const Decrement = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement (-)
      </button>
    </div>
  );
};
export default Decrement;
