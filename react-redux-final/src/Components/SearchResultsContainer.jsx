import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {rawSearchResults: state.rawSearchResults};
};

class ConnectedSearchResultsContainer extends React.Component {
    render() {
        if (this.props.rawSearchResults.length == 0) { // Again notice that the App component did not pass in the rawSearchResults property. This came from Redux.
            return(<div></div>);
        } else {
            let searchResults = this.props.rawSearchResults.map((result, index) => {
                return <SearchResult key={index} url={result.show.url} imgurl={result.show.image ? result.show.image.medium : ''} name={result.show.name} summary={result.show.summary} />
            });
            return(
                <div className="container-fluid">
                    <div className="row pt-5">
                        {searchResults}
                    </div>
                </div>
            )
        }
    }
}

ConnectedSearchResultsContainer.propTypes = {
    rawSearchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const SearchResultsContainer = connect(mapStateToProps, null)(ConnectedSearchResultsContainer);

export default SearchResultsContainer;
