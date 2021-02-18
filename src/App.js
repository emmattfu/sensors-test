import React from "react";
import { StyledApp } from "./styled";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sensors from "./pages/Sensors";
import Sensor from "./pages/Sensor";
import { pages } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Switch>
          <Route exact component={Sensors} path={pages.SENSORS.DEFAUTL_PATH} />
          <Route exact component={Sensor} path={pages.SENSOR.INDEX} />
        </Switch>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
