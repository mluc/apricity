import React, {Component} from "react";
import {Route} from "react-router-dom";
import ListEntries from "./components/ListEntries";
import * as EntriesAPI from "./utils/EntriesAPI";

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
                <Route exact path='/' render={() => (
                    <ListEntries
                        entries={this.state.entries}
                    />
                )}/>
            </div>
        )
    }
}

export default App;