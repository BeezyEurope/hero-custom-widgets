import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { StyledMainContainer } from "../../domain/Social/Social.styles";

const SocialContainer = React.lazy(() =>
  import("../../domain/Social/SocialContainer")
);

const AppRouter: () => React.ReactElement = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/social" />
      </Route>
      <Route path="/social">
        <Suspense fallback={<StyledMainContainer />}>
          <SocialContainer />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default AppRouter;
