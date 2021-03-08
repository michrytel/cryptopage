import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./js/Main";
import SignUp from "./js/SignUp";
import Courses from "./js/Courses";
import Header from "./js/components/Header";
import Footer from "./js/components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/" component={Main}/>
                </Switch>
            </Router>
            <Footer/>
        </>

    );
}

export default App;


