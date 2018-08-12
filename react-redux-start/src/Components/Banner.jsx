import React from 'react';

const styles = {
    banner: {
        width: '100%',
        height: '3em',
        lineHeight: '3em',
        fontSize: '1.25em',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Arial',
    }
}
export default class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="banner" style={styles.banner}>
                {this.props.appName}
            </div>
        )
    }
}