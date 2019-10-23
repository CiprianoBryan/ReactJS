import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeList from '../pages/BadgeList';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badge" component={BadgeList}/>
                <Route exact path="/badge/new" component={BadgeNew}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;