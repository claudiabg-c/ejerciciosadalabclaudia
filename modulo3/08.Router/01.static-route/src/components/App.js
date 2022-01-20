import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import "../styles/App.scss";
import Header from "./Header";
import Content from "./Content";
import SettingsText from "./SettingsText";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/overview">
          <Header />
          <Content />
        </Route>
        <Route path="/repositories">
          <Header />
          <Content />
        </Route>
        <Route path="/packages">
          <Header />
          <Content />
        </Route>
        <Route path="/people">
          <Header />
          <Content />
        </Route>
        <Route path="/teams">
          <Header />
          <Content />
        </Route>
        <Route path={["/settings", "/projects"]}>
          <Header />
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
