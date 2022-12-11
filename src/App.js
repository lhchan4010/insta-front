import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isDarkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { Home } from "./screen/Home";
import { LogIn } from "./screen/LogIn";
import { NotFound } from "./screen/NotFound";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const isDarkMode = useReactiveVar(isDarkModeVar);
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {isLoggedIn ? (
                            <Home isDarkMode={isDarkMode} />
                        ) : (
                            <LogIn />
                        )}
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
