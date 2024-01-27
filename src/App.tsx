import "./App.css";
import { AppContextProvider } from "./hooks/useAppContext";
import SetValue from "./components/SetValue";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import DisplayValue from "./components/DisplayValue";

function App() {
  return (
    <AppContextProvider initialValues={{ count: 10 }}>
      <div>
        <SetValue />
        <Increment />
        <Decrement />
        <DisplayValue />
      </div>
    </AppContextProvider>
  );
}

export default App;
