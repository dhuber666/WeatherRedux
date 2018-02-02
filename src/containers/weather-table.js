
import React from 'react';
import {connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';




class WeatherTable extends React.Component {

    renderWeather = (weather, id) => {

    const temperatures = weather.list.map((data) => data.main.temp);
    const pressures = weather.list.map((data) => data.main.pressure);
    const humidities = weather.list.map((data) => data.main.humidity);
    let long = weather.city.coord.lon;
    let lat = weather.city.coord.lat;

        return (
            <tr key={id} className='row'>
                <td> <GoogleMap long={long} lat={lat} /> </td>
                <td> 
                    <Chart color='green' data={temperatures} />
                </td>
                <td> <Chart color='red' data={pressures} /> </td>
                <td> <Chart color='orange' data={humidities} /> </td>
            </tr>
        )

    } 

    render () {
        console.log(this.props.weather);
        return (
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Ort</th>
                        <th>Temperatur (in °C)</th>
                        <th>Luftdruck (in hPA) </th>
                        <th>Feuchtigkeit (in %) </th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherTable);