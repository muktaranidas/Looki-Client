import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Route/Routes";

function App() {
  return (
    <div className="body-bg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
