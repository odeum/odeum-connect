import React from 'react'

const APIConnector = () => {
  return (
    <div>ODEUM Connect is a module that connects ODEUM CodeJS with ODEUM API v. 0.1.0</div>
  )
}

export default APIConnector

export class GeoLocation extends React.Component {

    constructor(props) {
      super(props);
     
      this.state = {
        lat:  '',
        long: ''
      }

      this.GetLatitude = this.GetLatitude.bind(this)
      this.GetLongitude = this.GetLongitude.bind(this)
      this.GetLatitude()
      this.GetLongitude()
    }

    GetLatitude() {

    var _this = this

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude
            _this.setState({lat});        
        })
    }

    else {

    console.log('Geolocation is not available')
    }

    }

    GetLongitude() {

    var _this = this;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var long = position.coords.longitude
            _this.setState({long});        
        })
    }

    else {

    console.log('Geolocation is not available')
    }

    }

    render() {
        
        return (
            <div>
                <p>{ this.state.lat } </p>
                <p>{ this.state.long } </p>
            </div>
        );
    }
}

