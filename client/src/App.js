import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListEntries from './ListEntries'
import * as EntriesAPI from './utils/EntriesAPI'

class App extends Component {

    state = {
        entries: [],
        ids:[],
        systolicBPs:[],
        chartData:{}
    }
    componentDidMount() {
        EntriesAPI.getAll().then((entries) => {

            this.setState({
                entries:entries,
                ids:entries.map(item => item.id),
                systolicBPs: entries.map(item => item.systolicBP),
                chartData: {
                    labels: entries.map(item => item.id),
                    datasets: [
                        {
                            label: 'Population',
                            data: entries.map(item => item.systolicBP),
                            backgroundColor: [
                                'rgba(255,99,132,0.6)'
                            ]
                        }
                    ]
                }
            })
        })
    }




    render() {
        return (
            <div>
              <Route exact path='/' render={() => (
                  <ListEntries
                      entries={this.state.entries} ids={this.state.ids} systolicBPs={this.state.systolicBPs} chartData={this.state.chartData}
                  />
              )}/>
            </div>
        )
    }
}

export default App;