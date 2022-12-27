// import router from "./router/router";
// import { RouterProvider } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// Components
import Login from "./Components/Login/Login";
import Chats from "./Components/Chats/Chats";
// context
import AuthContextProvider from "./Contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
          {/* <RouterProvider router={router} /> */}
          <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/"  component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
