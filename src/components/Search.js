import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// bootstrap import table
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SearchTable from './SearchTable';

// connect to dotenv file
require('dotenv').config();

class Search extends Component {

    state = {
        searchQuery: '',
        searchResults: []
    }

    // change the state to input changes
    handleSearch = (event) => {
        this.setState({
            ...this.state,
            searchQuery: event.target.value
        })
        console.log(this.state)
    }

    // once button is clicked, do this
    searchClicked = (event) => {
        event.preventDefault();
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let queryText = this.state.searchQuery;
        var apikey = '22a88300ffb9959259655ba256ae49c5971817be';
        var baseUrl = "https://www.giantbomb.com/api/";
        // construct the uri with our apikey
        var GamesSearchUrl = proxyurl + baseUrl + 'search/?api_key=' + apikey + '&format=json';
        axios({
            method: 'GET',
            url: GamesSearchUrl + '&query=' + queryText + '&resources=game',
            dataType: "json",
            data: {
              // query : request.term,
              resources: "game",
              field_list: "name,original_release_date,image,platforms,publishers,developers"
          },
        })
        .then((response) => {
            this.setState({
                ...this.state,
                searchResults: response.data.results
            })
        })
        .catch(error => {
            console.log('error in search:', error)
        })
        console.log('IN BUTTON CLICKED', this.state)
    }

    // add game to rental cart
    addProductToCart = () => {
        console.log(this.state.searchResults, 'in addProductToCart');
        // TODO: Dispatch here
        this.props.dispatch({type: 'RENT_VIDEOGAME', payload: this.state.searchResults.game})
    }
  
    render() {
      return (
        <div className="searchDiv">
            <h1>Find a Game</h1>
          
            <Form className="searchForm">
                <Form.Control type="text" placeholder="Search by Name.." className="mr-sm-2" onChange={(event) => {this.handleSearch(event, 'searchQuery')}}/>
                <Button variant="outline-dark" className="searchButton" onClick={this.searchClicked}>Search</Button>
            </Form>
            {/* if there is nothing in the searchResults array, show nothing */}
            {this.state.searchResults.length === 0 ?
                    <div></div>
                :
                // else, show the search results in a table
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Rent</th>
                        </tr>
                        {this.state.searchResults.map((game, i) => {
                            return (
                                <SearchTable key={i} game={game} />
                            )
                            })}
                    </tbody>
                </Table>
                }
        </div>
      );
    }
  }
  
   // export the searchReduxState via connect
   const searchReduxState = (reduxState) => ({
    reduxState
  })
  
  export default connect(searchReduxState) (Search);
  