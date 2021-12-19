import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {
    state = { images: [] };

    onsubmit = async (term) => {
        console.log(term);
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onsubmit} />
                <ImageList images={this.state.images} />
            </div >
        )
    }
}

export default App;