import React from "react";
import RouteChangeTracker from "./components/RouteChangeTracker";
import Routes from "./routes/routes";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-215966277-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: "User",
  action: "Created an Account",
});

ReactGA.exception({
  description: "An error ocurred",
  fatal: true,
});

function App() {
  return (
    <>
      <Routes />
      {/* <RouteChangeTracker /> */}
    </>
  );
}

export default App;
