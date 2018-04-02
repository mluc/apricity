import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import TwoLines from './components/TwoLines'
import MixChart from './components/MixChart'
import ThreeLines from './components/ThreeLines'
import DoughnutChart from './components/DoughnutChart'
import PieChart from './components/PieChart'
import {RadioGroup, RadioButton} from 'react-radio-buttons';
import math from 'mathjs'

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
        const {entries} = this.props
        const {selectedValue, labels, data} = this.state

        let showingLabels=[]
        let nonSmokerData=[]
        let smokerData=[]
        let overwtData0=[]
        let overwtData1=[]
        let overwtData2=[]
        let allSystolicBPs=[]

        //6 months data
        let months6 = new Date("6/1/2012")
        //6 weeks data
        let weeks6 = new Date("11/20/2012")
        //6 days data
        let days6 = new Date("12/26/2012")

        entries.map(item=>{
            const itemDate = new Date(item.date)
            let date = selectedValue == 'days6'? days6 : (selectedValue == 'weeks6'? weeks6 : months6)

            if(itemDate >= date){
                showingLabels.push(item.date)
                allSystolicBPs.push(item.systolicBP)
                if(item.smoke === 0){
                    nonSmokerData.push(item.systolicBP)
                    smokerData.push(null)
                }
                else{
                    nonSmokerData.push(null)
                    smokerData.push(item.systolicBP)
                }

                if(item.overwt ===0){
                    overwtData0.push(item.systolicBP)
                    overwtData1.push(null)
                    overwtData2.push(null)
                }
                else if(item.overwt ===1){
                    overwtData0.push(null)
                    overwtData1.push(item.systolicBP)
                    overwtData2.push(null)
                }
                else{
                    overwtData0.push(null)
                    overwtData1.push(null)
                    overwtData2.push(item.systolicBP)
                }
            }
        })

        let overwtDataCount=[
            overwtData0.filter(item=>item!=null).length,
            overwtData1.filter(item=>item!=null).length,
            overwtData2.filter(item=>item!=null).length
        ]

        let smokerCount=[
            nonSmokerData.filter(item=>item!=null).length,
            smokerData.filter(item=>item!=null).length
        ]

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
                    showingLabels.length > 0 &&(
                        <div>
                            <section className="container">
                                <div className="left">
                                    <div>
                                        <p>Summary:</p>
                                        <ul className="list-style">
                                            <li>Number of non-smokers:{smokerCount[0]}</li>
                                            <li>Number of smokers: {smokerCount[1]}</li>
                                            <li>Number of normal weight: {overwtDataCount[0]}</li>
                                            <li>Number of overweight: {overwtDataCount[1]}</li>
                                            <li>Number of obese: {overwtDataCount[2]}</li>
                                            <li>Mean of SystolicBP: {math.mean(allSystolicBPs)}</li>
                                            <li>Standard deviation of SystolicBP: {math.std(allSystolicBPs)}</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="middle">
                                    <div>
                                        <PieChart smokerCount={smokerCount} />
                                    </div>
                                </div>
                                <div className="right">
                                    <div>
                                        <DoughnutChart overwtDataCount={overwtDataCount} />
                                    </div>
                                </div>
                            </section>

                            <section className="container">
                                <div className="left-half">
                                    <div>

                                        <MixChart     labels={showingLabels}
                                                      nonSmokerData={nonSmokerData}
                                                      smokerData={smokerData}
                                                      datasetLabel='systolicBP for non-smokers'
                                                      datasetLabel2='systolicBP for smokers'
                                                      displayTitle="SystolicBP for smokers and non-smokers"

                                                      legendPosition="bottom"/>
                                    </div>
                                </div>
                                <div className="right-half">
                                    <div>
                                        <ThreeLines labels={showingLabels}
                                               overwtData0={overwtData0}
                                               overwtData1={overwtData1}
                                               overwtData2={overwtData2}
                                               datasetLabel0='systolicBP for normal'
                                               datasetLabel1='systolicBP for overweight'
                                               datasetLabel2='systolicBP for obese'
                                               displayTitle="SystolicBP for normal, overweight, and obese"
                                               legendPosition="bottom"/>
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
