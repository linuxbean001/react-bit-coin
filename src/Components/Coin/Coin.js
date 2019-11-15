import React, { Component } from 'react'
import CanvasJSReact from './../../assets/canvasjs.react'
import './Coin.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Coin extends Component {
  constructor() {
    super()
    this.state = {
      color: '',
      litecoin: '',
      ethereum: '',
      eos: '',
      ripple: '',
      bitcoin: '',
      bitcoincash: '',
      litecoin1: '#3ED360',
      ethereum1: '#3F3939',
      eos1: '#7B7B7B',
      ripple1: '#444040',
      bitcoin1: '#18191D',
      bitcoincash1: '#4E4C4C'
    }
    this.circleClick = this.circleClick.bind(this)
  }
  circleClick(e) {
    switch (e.dataPoint.name) {
      case 'Litecoin': this.setState({
        litecoin: 'mainColor',
        ethereum: '',
        eos: '',
        ripple: '',
        bitcoincash: '',
        bitcoin: '',
        litecoin1: 'green',
        ethereum1: '#3F3939',
        eos1: '#7B7B7B',
        ripple1: '#444040',
        bitcoincash1: '#4E4C4C',
        bitcoin1: '#18191D'

      });
        break;

      case 'Ethereum': this.setState({
        ethereum: 'mainColor',
        litecoin: '',
        eos: '',
        ripple: '',
        bitcoincash: '',
        bitcoin: '',
        litecoin1: '#3F3939',
        ethereum1: 'green',
        eos1: '#7B7B7B',
        ripple1: '#444040',
        bitcoincash1: '#4E4C4C',
        bitcoin1: '#18191D'

      });
        break;

      case 'EOS': this.setState({
        eos: 'mainColor',
        ethereum: '',
        litecoin: '',
        ripple: '',
        bitcoincash: '',
        bitcoin: '',
        litecoin1: '#3F3939',
        ethereum1: '#7B7B7B',
        eos1: 'green',
        ripple1: '#444040',
        bitcoincash1: '#4E4C4C',
        bitcoin1: '#18191D'

      });
        break;

      case 'Ripple': this.setState({
        ripple: 'mainColor',
        ethereum: '',
        litecoin: '',
        eos: '',
        bitcoincash: '',
        bitcoin: '',
        litecoin1: '#3F3939',
        ethereum1: '#7B7B7B',
        eos1: '#444040',
        ripple1: 'green',
        bitcoincash1: '#4E4C4C',
        bitcoin1: '#18191D'


      });
        break;

      case 'Bitcoin Cash': this.setState({
        bitcoincash: 'mainColor',
        ripple: '',
        ethereum: '',
        litecoin: '',
        eos: '',
        bitcoin: '',
        litecoin1: '#3F3939',
        ethereum1: '#7B7B7B',
        eos1: '#444040',
        ripple1: '#4E4C4C',
        bitcoincash1: 'green',
        bitcoin1: '#18191D'


      });
        break;

      case 'Bitcoin': this.setState({
        bitcoin: 'mainColor',
        bitcoincash: '',
        ripple: '',
        ethereum: '',
        litecoin: '',
        eos: '',
        litecoin1: '#3F3939',
        ethereum1: '#7B7B7B',
        eos1: '#444040',
        ripple1: '#4E4C4C',
        bitcoincash1: '#18191D',
        bitcoin1: 'green'

      });
        break;

    }

  }
  render() {
    const options = {
      backgroundColor: '#2C2D31',
      animationEnabled: true,
      subtitles: [{
        text: "Total Flagged Trades",
        fontColor: 'white',
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true
      }],
      data: [{
        theme: "dark1",
        height: 700,
        radius: '95%',
        innerRadius: '80%',
        legend: {
          maxWidth: 300,
          itemWidth: 120

        },
        type: "doughnut",
        showInLegend: false,
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Litecoin", color: this.state.litecoin1, y: 20, click: this.circleClick,exploded:true },
          { name: "Ethereum", color: this.state.ethereum1, y: 10, click: this.circleClick,exploded:true },
          { name: "EOS", color: this.state.eos1, y: 10, click: this.circleClick,exploded:true },
          { name: "Ripple", color: this.state.ripple1, y: 10, click: this.circleClick,exploded:true },
          { name: "Bitcoin Cash", color: this.state.bitcoincash1, y: 10, click: this.circleClick,exploded:true },
          { name: "Bitcoin", color: this.state.bitcoin1, y: 40, click: this.circleClick,exploded:true },
          
        ]
      }]
    }

    return (

      <div style={{'background':'#2C2D31'}} className="container">
        <div className="row">
          <div className="col-md-6">
            <div className='mycss'>
            <CanvasJSChart options={options}
            />
            </div>
          </div>
          <div className="col-md-6">
            <table className="table">
              <tr className="text1">
                <td className={this.state.bitcoin}>Bitcoin</td>
                <td className={this.state.bitcoin}>40%</td>
              </tr>
              <tr className="text">
                <td className={this.state.litecoin}>Litecoin</td>
                <td className={this.state.litecoin}>20%</td>
              </tr>
              <tr className="text1">
                <td className={this.state.ethereum}>Ethereum</td>
                <td className={this.state.ethereum}>10%</td>
              </tr>
              <tr className="text">
                <td className={this.state.eos}>EOS</td>
                <td className={this.state.eos}>10%</td>
              </tr>
              <tr className="text1">
                <td className={this.state.ripple}>Ripple</td> 
                <td className={this.state.ripple}>10%</td>
              </tr>
              <tr className="text">
                <td className={this.state.bitcoincash}>Bitcoin Cash</td>
                <td className={this.state.bitcoincash}>10%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    )
  }
}
export default Coin
