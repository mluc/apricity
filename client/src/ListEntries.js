import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Chart from './components/Chart'
import {RadioGroup, RadioButton} from 'react-radio-buttons';

class ListEntries extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'months6',
            labels:[],
            data:[]
        }
    }

    static propTypes = {
        entries: PropTypes.array.isRequired,
        ids: PropTypes.array.isRequired,
        systolicBPs: PropTypes.array.isRequired,
    }


    handleSelection = (value) => {

        this.setState({
            selectedValue: value,
            labels: this.props.ids,
            data: this.props.systolicBPs,
        });

    }

    render() {
        const {entries, ids, systolicBPs} = this.props
        const {selectedValue, labels, data} = this.state

        let showingLabels=[]
        let showingData=[]

        if(selectedValue == 'weeks6'){

            //6 weeks data
            let d = new Date("11/20/2012").toLocaleDateString()
            entries.map(item=>{
                if(item.date >= d){
                    showingLabels.push(item.date)
                    showingData.push(item.systolicBP)
                }
            })

            //showingLabels = entries.map(item => item.date).filter(item=> item>=d );
            //showingData = entries.map(item => item.systolicBPs);
        }
        else if(selectedValue == 'days6') {
            //6 days data
            let d = new Date("12/26/2012").toLocaleDateString()
            entries.map(item=>{
                if(item.date >= d){
                    showingLabels.push(item.date)
                    showingData.push(item.systolicBP)
                }
            })
            //showingLabels = entries.map(item => item.date);
            //showingData = entries.map(item => item.systolicBPs);

        }
        else{

            entries.map(item=>{
                showingLabels.push(item.date)
                showingData.push(item.systolicBP)
            })

        }


        return (

            <div className="wrapper">
                <section>
                    <RadioGroup className="buttons" onChange={(value) => this.handleSelection(value) } horizontal>
                        <RadioButton value="months6" checked={selectedValue=='months6'}>
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
                    showingLabels.length > 0 && showingData.length > 0 &&(
                        <div>
                            <section className="container">
                                <div className="left">
                                    <div>
                                        Summary
                                    </div>
                                </div>
                                <div className="middle">
                                    <div>
                                        <Chart labels={showingLabels} data={showingData} legendPosition="bottom"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div>
                                        <Chart labels={showingLabels} data={showingData} legendPosition="bottom"/>
                                    </div>
                                </div>
                            </section>

                            <section className="container">
                                <div className="left-half">
                                    <h2>Chart 1</h2>
                                    <div>
                                        <Chart labels={showingLabels} data={showingData} legendPosition="bottom"/>
                                    </div>
                                </div>
                                <div className="right-half">
                                    <h2>Chart 2</h2>
                                    <div>
                                        <Chart labels={showingLabels} data={showingData} legendPosition="bottom"/>
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
