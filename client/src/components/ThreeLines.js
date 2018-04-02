import React, {Component} from "react";
import {Line} from "react-chartjs-2";

class ThreeLines extends Component {


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

    render() {

        return (
            <div className="chart">

                <Line
                    data={{
                        labels: this.props.labels,
                        datasets: [
                            {
                                spanGaps: true,
                                fill: false,
                                label: this.props.datasetLabel0,
                                data: this.props.overwtData0,
                                backgroundColor: [
                                    'rgba(255,99,132,0.6)'
                                ]
                            },
                            {
                                spanGaps: true,
                                fill: false,
                                label: this.props.datasetLabel1,
                                data: this.props.overwtData1,
                                backgroundColor: [
                                    'rgba(25,99,132,0.6)'
                                ]

                            },
                            {
                                spanGaps: true,
                                fill: false,
                                label: this.props.datasetLabel2,
                                data: this.props.overwtData2,
                                backgroundColor: [
                                    'rgba(100,99,132,0.6)'
                                ]

                            }
                        ]
                    }}
                    options={{
                        title: {
                            display: true,
                            text: this.props.displayTitle,
                            fontSize: 15
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />


            </div>

        )
    }
}

export default ThreeLines