import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeList from '../pages/BadgeList';
import BadgeHome from '../pages/BadgeHome';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badge" component={BadgeList}/>
                    <Route exact path="/badge/new" component={BadgeNew}/>
                    <Route exact path="/badge/home" component={BadgeHome}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;