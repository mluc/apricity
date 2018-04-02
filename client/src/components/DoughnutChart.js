import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'

class DoughnutChart extends Component{


    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }
    render(){

        return(
            <div className="chart">

                <Doughnut
                    data={{
                        labels: [
                            'Normal',
                            'Overweight',
                            'Obese'
                        ],
                        datasets: [{
                            data: this.props.overwtDataCount,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ]
                        }]
                    }}
                />


            </div>

        )
    }
}

export default DoughnutChart