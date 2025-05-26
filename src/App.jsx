import "./App.css";
// // import ComponentA from "./ComponentA.jsx";
// import ComponentB from "./ComponentB.jsx";
import "./index.css";
import Routing from "./Router.jsx";
// // import { ThemeProvider } from "./ContextProvider.jsx";

function App() {
  return (
    <div>
      <Routing /> {/* This now handles rendering the entire app */}
      {/* <ThemeProvider>
        <ComponentA />
        <ComponentB />
      </ThemeProvider> */}
    </div>
  );
}

export default App;
