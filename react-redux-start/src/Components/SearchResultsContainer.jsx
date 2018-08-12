import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

export default class SearchResultsContainer extends React.Component {
    render() {
        if (this.props.rawSearchResults.length == 0) {
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

SearchResultsContainer.propTypes = {
    rawSearchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};
