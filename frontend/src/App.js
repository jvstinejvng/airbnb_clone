import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormModal from "./components/LoginFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotDetails from "./components/SpotDetailPage";
import AllSpots from "./components/AllSpots";
import CreateSpot from "./components/CreateSpotPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/login">
            <LoginFormModal />
          </Route>
          <Route exact path="/">
            <AllSpots />
          </Route>
          <Route exact path="/spots/:spotId">
            <SpotDetails />
          </Route>
          <Route exact path="/spots/create">
            <CreateSpot />
          </Route>
        </Switch>
      )}
    </>
  );
}


export default App;