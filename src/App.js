import React from 'react';
import './App.css';
import ImageList from './components/ImageList';
import Search from './components/search';
import axios from 'axios';

class App extends React.Component {


  state = { images: [] }

  onSearchSubmit = async (term) => {
    try {
      const responce = await axios.get("https://api.unsplash.com/search/photos", { // get method have two parameters. 1)URL 2)Object:- setting up request configuration
        params: { query: term },
        headers: { // we need authorization to get data from this endpoint so we have an authorization key 
          Authorization:
            "Client-ID 8e89kWmUOsV0O2jolA2PSWW6lvF5jErwwBn7Gdu3LMY" // this is the access key
        }
      })
      //console.log(responce);
      this.setState({ images: responce.data.results })
    } catch (error) {
      console.log(error);
    }

    // There are two different convention to get the responce 1) first is promise 2)async and await:- this is more easier
    //   // with promise
    //   axios.get("https://api.unsplash.com/search/photos", {
    //     params: { query: term },
    //     headers: {
    //       Authorization: "Client-ID 8e89kWmUOsV0O2jolA2PSWW6lvF5jErwwBn7Gdu3LMY"
    //     }
    //   }).then((responce) => console.log(responce.data.results))
    //     .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <Search onSearch={this.onSearchSubmit} />{/* onSearch is a child props. we are getting state value here because the moment user enter in search bar onSearchSubmit function will run and user will get the result*/}
        <ImageList image={this.state.images} />
      </div>
    );
  }
}

export default App;
