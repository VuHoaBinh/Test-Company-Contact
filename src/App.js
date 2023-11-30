import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import EditPage from "./pages/EditPage";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import red from "@mui/material/colors/red"; // Import the color you want to use
import deepOrange from "@mui/material/colors/deepOrange"; // Import the color you want to use
import grey from "@mui/material/colors/grey"; // Import the color you want to use

function App() {
  const mode = useSelector((state) => state.mode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: red,
                divider: red[200],
                text: {
                  primary: red[900],
                  secondary: red[800],
                },
              }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                  default: deepOrange[900],
                  paper: deepOrange[900],
                },
                text: {
                  primary: grey[500],
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <div className="app__container">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/edit/:id" component={EditPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
