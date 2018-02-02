import React from 'react';


export default class GoogleMap extends React.Component {

    componentDidMount() {

        const city = {lat: this.props.lat, lng: this.props.long };

        const map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: city
        })

    }

    componentDidUpdate() {
        const city = {lat: this.props.lat, lng: this.props.long };

        const map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: city
        })
    }

    render() {
    return <div className='map' ref={'map'} />

    }
}







