import { useAppContext } from "../hooks/useAppContext";
const Increment = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT (+)
      </button>
    </div>
  );
};
export default Increment;
