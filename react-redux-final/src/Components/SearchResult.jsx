import React from 'react';
import PropTypes from 'prop-types';

export default class SearchResult extends React.Component {
    render() {
        return(
            <div className="px-4 pb-5 col-6 col-md-4 text-center">
                <a href={this.props.url}>
                    <img className="img-fluid" src={this.props.imgurl ? this.props.imgurl : 'https://picsum.photos/210/295/?random'} alt={this.props.name} />
                </a><br />
                <details>
                    <summary>{this.props.name}</summary>
                    <p className="searchResultSummary" dangerouslySetInnerHTML={{__html: this.props.summary}}></p>
                </details>
            </div>
        );
    }
}

SearchResult.propTypes = {
    url: PropTypes.string,
    imgurl: PropTypes.string,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string,
}