import {
  useContext,
  createContext,
  useReducer,
  Dispatch,
  Reducer,
} from "react";

type AppContextStateType = {
  count: number;
};
type ReducerType = Reducer<AppContextStateType, Action>;

type Action = {
  type: "INCREMENT" | "DECREMENT" | "SET_VALUE";
  value?: number;
};

const reducer: ReducerType = (state: AppContextStateType, action: Action) => {
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
  { state: AppContextStateType; dispatch: Dispatch<Action> } | undefined
>(undefined);

type AppContextProviderType = {
  children: React.ReactNode;
  initialValues: AppContextStateType;
};

export const AppContextProvider = ({
  children,
  initialValues,
}: AppContextProviderType) => {
  const [state, dispatch] = useReducer<ReducerType>(reducer, initialValues);

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
