import indexRouter from "./routes/index.js";
import { RouterProvider } from "react-router-dom";
import "./App.css";


function App() {
  return (
            <RouterProvider router={indexRouter}/>
  );
}

export default App;
