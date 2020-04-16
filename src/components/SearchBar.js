import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchTermSubmit(this.state.searchTerm);
    }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search Application</label>
                        <div className="ui left icon input">
                            <input
                                type="text"
                                placeholder="search for your favourite video..."
                                value={this.state.searchTerm}
                                onChange={ e => this.setState({ searchTerm: e.target.value.toUpperCase() }) }>
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
