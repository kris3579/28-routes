import "@babel/polyfill";
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
    contructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/dashboards" component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </main>
        )
    }
}

export default App;
