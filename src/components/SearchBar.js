import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <div className="ui left icon input">
                            <input type="text" placeholder="search for your favourite video..."></input>
                            <i className="video icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
