import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
    searchBar: {
        width: '60%',
        height: '3em',
        lineHeight: '3em',
        fontSize: '1em',
        padding: '2px 0.75em',
        margin: '2em auto',
    },
    searchContainer: {
        width: '100%',
        textAlign: 'center',
        marginTop: '3em',
    }
}

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
        this._apiQueryRoot = 'http://api.tvmaze.com/search/shows?q=';
        this.searchSubmit = this.searchSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({query: event.target.value});
    }

    searchSubmit(event) {
        event.preventDefault();
        if (this.state.query != '') {
            let url = this._apiQueryRoot + encodeURIComponent(this.state.query);
            this.setState({query: ''});
            fetch(url)
                .then(r => r.json())
                .then(d => this.props.searchResultHandler(d))
        } else {
            return;
        };
    }

    render() {
        return(
            <div className="searchContainer" style={styles.searchContainer}>
                <form onSubmit={this.searchSubmit}>
                    <input className="searchBar" style={styles.searchBar} value={this.state.query} placeholder="Enter a movie title..." onChange={this.changeHandler} /><br />
                    <Button bsStyle="primary" onClick={this.searchSubmit}>Search</Button>
                </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    searchResultHandler: PropTypes.func.isRequired
};
