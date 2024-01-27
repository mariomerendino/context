import "./App.css";
import { AppContextProvider } from "./hooks/useAppContext";
import SetValue from "./components/SetValue";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import DisplayValue from "./components/DisplayValue";

function App() {
  return (
    <AppContextProvider initialValues={{ count: 10 }}>
      <SetValue />
      <Increment />
      <Decrement />
      <DisplayValue />
    </AppContextProvider>
  );
}

export default App;
