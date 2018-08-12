import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './Redux/store/store';

import Banner from './Components/Banner';
import SearchBar from './Components/SearchBar';
import SearchResultsContainer from './Components/SearchResultsContainer';

import paragraphs from './strings';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <Banner appName="React Redux, A Super Brief Introduction" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="px-5 mt-5">{paragraphs[0]}</p>

                        <p className="px-5 mt-5">{paragraphs[1]}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <SearchBar />
                    </div>
                    <div className="col-12 col-md-6">
                        <SearchResultsContainer />
                    </div>
                </div>
            </div>
        )
    }
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
