import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component{


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
                                label: 'Population',
                                data: this.props.data,
                                backgroundColor: [
                                    'rgba(255,99,132,0.6)'
                                ]
                            }
                        ]
                    }}
                    options={{
                       title:{
                           display:this.props.displayTitle,
                           text:'',
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

export default Chart