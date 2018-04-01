import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Chart from './components/Chart'
import {RadioGroup, RadioButton} from 'react-radio-buttons';

class ListEntries extends Component {

    state = {
        selectedValue: '',
    }
    static propTypes = {
        entries: PropTypes.array.isRequired,
        ids: PropTypes.array.isRequired,
        systolicBPs: PropTypes.array.isRequired,
    }


    handleSelection(value) {
        this.setState({selectedValue: value});
    }

    render() {
        const {entries, ids, systolicBPs, chartData} = this.props
        const {selectedValue} = this.state

        console.log("GGGGGGGGGGGGGGG")
        console.log(entries)

        return (

            <div className="wrapper">
                <section>
                    <RadioGroup className="buttons" onChange={(value) => this.handleSelection(value) } horizontal>
                        <RadioButton value="months6">
                            6 Months
                        </RadioButton>
                        <RadioButton value="weeks6">
                            6 Weeks
                        </RadioButton>
                        <RadioButton value="days6">
                            6 Days
                        </RadioButton>
                    </RadioGroup>

                </section>

                {
                    chartData  && Object.keys(chartData).length > 0 && (
                        <div>
                            <section className="container">
                                <div className="left">
                                    <div>
                                        Summary
                                    </div>
                                </div>
                                <div className="middle">
                                    <div>
                                        <Chart chartData={chartData} legendPosition="bottom"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div>
                                        <Chart chartData={chartData} legendPosition="bottom"/>
                                    </div>
                                </div>
                            </section>

                            <section className="container">
                                <div className="left-half">
                                    <h2>Chart 1</h2>
                                    <div>
                                        <Chart chartData={chartData} legendPosition="bottom"/>
                                    </div>
                                </div>
                                <div className="right-half">
                                    <h2>Chart 2</h2>
                                    <div>
                                        <Chart chartData={chartData} legendPosition="bottom"/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                }


            </div>
        )
    }
}

export default ListEntries
