import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import ListEntries from "./components/ListEntries";
import * as EntriesAPI from "./utils/EntriesAPI";
import Detail1 from "./components/Detail1";
import Detail2 from "./components/Detail2";
import Home from "./components/Home";

class App extends Component {

    state = {
        entries: []
    }

    componentDidMount() {
        EntriesAPI.getAll().then((entries) => {

            this.setState({
                entries: entries
            })
        })
    }

    render() {
        return (
            <div>

                <div className="sidenav">
                        <ul className="list-style-sidenav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/charts">Charts</Link></li>
                            <li><Link to="/detail1">Detail1</Link></li>
                            <li><Link to="/detail2">Detail2</Link></li>
                        </ul>
                </div>
                <div className="main">
                    <Route exact path='/' render={() => (
                        <Home/>
                    )}/>
                    <Route exact path='/charts' render={() => (
                        <ListEntries
                            entries={this.state.entries}
                        />
                    )}/>
                    <Route exact path='/detail1' render={() => (
                        <Detail1/>
                    )}/>
                    <Route exact path='/detail2' render={() => (
                        <Detail2/>
                    )}/>
                </div>
            </div>
        )
    }
}


export default App;