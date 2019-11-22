import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import Details from './pages/Details'
import Home from './pages/Home';
import Edit from './pages/Edit'
import Add from './pages/Add'
import Nav from './components/nav';

class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <BrowserRouter>
                <main className="container my-5">
                <Nav />

                    <Switch>
                        <Route exact path= '/' component= {Home}/>
                        <Route exact path='/books' component={AllBooks} />
                        <Route exact path ='/:id/details' component= {Details}/>
                        <Route exact path='/:id/update' component= {Edit}/>
                        <Route exact path='/books/new' component={Add}/>

                    </Switch>
                </main>
            </BrowserRouter>

        )
    }
}

export interface IAppProps { }

export interface IAppState {
}

export default App;