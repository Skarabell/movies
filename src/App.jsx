import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import {BrowserRouter, Route} from "react-router-dom"


const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/watch">
                <Watch/>
            </Route>
        </BrowserRouter>
    )
}
export default App;
