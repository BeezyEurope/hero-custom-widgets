import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "../../styles/GlobalStyle";
import AppRouter from "./AppRouter";

const App: React.FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <AppRouter />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
