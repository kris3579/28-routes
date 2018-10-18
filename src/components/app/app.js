import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <main>
                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                        </nav>

                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/dashboards" component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </main>
    );
  }
}

export default App;
