import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import "../styles/App.scss";
import Header from "./Header";
import Content from "./Content";
import SettingsText from "./SettingsText";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/overview">
          <Content />
        </Route>
        <Route path="/repositories">
          <Content />
        </Route>
        <Route path="/packages">
          <Content />
        </Route>
        <Route path="/people">
          <Content />
        </Route>
        <Route path="/teams">
          <Content />
        </Route>
        <Route path={["/settings", "/projects"]}>
          <SettingsText />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
