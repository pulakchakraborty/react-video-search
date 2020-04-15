import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <div className="ui left icon input">
                            <input
                                type="text"
                                placeholder="search for your favourite video..."
                                value={this.state.term}
                                onChange={ e => this.setState({ term: e.target.value.toUpperCase() }) }>
                            </input>
                            <i className="video icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
