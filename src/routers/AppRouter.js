import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header  from '../components/Header';
import Help from '../components/Help';
import About from '../components/About';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage'


const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header/>
       <Switch>
       <Route path="/" component={Home} exact={true} />
       <Route path="/about" component={About} />
       <Route path="/help" component={Help} />
       <Route component={NotFoundPage} />
       </Switch>
    </div>
    </BrowserRouter>
)
export default AppRouter;