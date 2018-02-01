import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherAction } from '../actions/index';

class SearchBar extends React.Component {

    state = {
        term: ''
    }



    render() {

        fetchWeather = (event) => {
            event.preventDefault();

            this.props.fetchWeather(this.state.term);

            this.setState({term: ''});
        }

        return (
            <form className='input-group' onSubmit={this.fetchWeather}>
                <input
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})}
                    placeholder='search for your favorite city, to get a 5 day forecast'
                    className='form-control' />
                <span className='input-group-btn'>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ fetchWeather: fetchWeatherAction }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);