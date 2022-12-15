import router from "./router/router";
import { RouterProvider } from "react-router-dom";
// context
import AuthContextProvider from "./Contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
          <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
