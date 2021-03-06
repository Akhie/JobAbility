import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NgoRegisterPage from "./views/NgoRegisterPage/NgoRegister.js";
import NgoLoginPage from "./views/Ngologin/Ngologin";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import VacancyPage from './views/VacancyPage/VacancyPage';
import HomePage from './views/HomePage/Homepage';
import JobsPage from './views/JobsPage/JobsPage';
import DetailJobPage from './views/JobsPage/DetailJobPage';
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/ngoregister" component={Auth(NgoRegisterPage, false)} />
          <Route exact path="/ngologin" component={Auth(NgoLoginPage, false)} />
          <Route exact path="/vacancy" component={Auth(VacancyPage, null)} />
          <Route exact path="/getNgo" component={Auth(HomePage, null)} />
          <Route exact path="/jobs" component={Auth(JobsPage, null)} />
          <Route exact path="/jobs/:jobId" component={Auth(DetailJobPage, false)} />
        </Switch>
      </div>
      <br></br>
      <Footer />
    </Suspense>
  );
}

export default App;
