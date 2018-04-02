import React, {Component} from "react";
import {Pie} from "react-chartjs-2";

class PieChart extends Component {

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

    render() {

        return (
            <div className="chart">

                <Pie
                    data={{
                        labels: [
                            'Non-smoker',
                            'Smoker'
                        ],
                        datasets: [{
                            data: this.props.smokerCount,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB'
                            ]
                        }]
                    }}
                />


            </div>

        )
    }
}

export default PieChart