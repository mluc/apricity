import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';

class MixChart extends Component{


    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }


    render(){

        const data = {
            labels: this.props.labels,
            datasets: [{
                spanGaps: true,
                label: this.props.datasetLabel1,
                type:'line',
                data: this.props.smokingData,
                fill: false,
                borderColor: '#EC932F',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-2'
            },{
                spanGaps: true,
                type: 'bar',
                label: this.props.datasetLabel2,
                data: this.props.weightData,
                fill: false,
                backgroundColor: '#71B37C',
                borderColor: '#71B37C',
                hoverBackgroundColor: '#71B37C',
                hoverBorderColor: '#71B37C',
                yAxisID: 'y-axis-1'
            }]
        };

        const options = {
            responsive: true,
            tooltips: {
                mode: 'label'
            },
            elements: {
                line: {
                    fill: false
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false
                        },

                    }
                ],
                yAxes: [
                    {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },

                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            display: false
                        },

                    }
                ]
            }
        };

        const plugins = [{
            afterDraw: (chartInstance, easing) => {
                const ctx = chartInstance.chart.ctx;
                ctx.fillText("", 100, 100);
            }
        }];


        return(
            <div className="chart">

                <Bar
                    data={data}
                    options={options}
                    plugins={plugins}
                />


            </div>

        )
    }
}

export default MixChart