import { useContext, createContext, useReducer, Dispatch } from "react";

type AppContextStateType = {
  count: number;
};

type IncrementAction = { type: "INCREMENT" };
type DecrementAction = { type: "DECREMENT" };
type SetValueAction = { type: "SET_VALUE"; value: number };

type AppActions = IncrementAction | DecrementAction | SetValueAction;

const reducer = (state: AppContextStateType, action: AppActions) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_VALUE":
      return { ...state, count: action.value };
    default:
      return state;
  }
};

const AppContext = createContext<
  { state: AppContextStateType; dispatch: Dispatch<AppActions> } | undefined
>(undefined);

type AppContextProviderType = {
  children: React.ReactNode;
  initialValues: AppContextStateType;
};

export const AppContextProvider = ({
  children,
  initialValues,
}: AppContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
