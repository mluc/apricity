import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class TwoLines extends Component{


    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }
    render(){

        return(
            <div className="chart">

                <Line
                    data={{
                        labels: this.props.labels,
                        datasets: [
                            {
                                spanGaps: true,
                                fill: false,
                                label: this.props.datasetLabel,
                                data: this.props.nonSmokerData,
                                backgroundColor: [
                                    'rgba(255,99,132,0.6)'
                                ]
                            },
                            {
                                spanGaps: true,
                                fill: false,
                                label: this.props.datasetLabel2,
                                data: this.props.smokerData,
                                backgroundColor: [
                                    'rgba(25,99,132,0.6)'
                                ]

                            }
                        ]
                    }}
                    options={{
                       title:{
                           display: true,
                           text:this.props.displayTitle,
                           fontSize:25
                       },
                        legend:{
                           display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />


            </div>

        )
    }
}

export default TwoLines