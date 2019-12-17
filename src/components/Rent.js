import React, { Component } from 'react';
import { connect } from 'react-redux';

import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';

class Checkout extends Component {

    handleCheckout = (event) => {
        event.preventDefault();
        // TODO: Clear the cart and navigate to the home page
        Swal.fire({
            title: 'Are you ready to checkout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, rent my game(s)!'
          }).then((result) => {
            if (result.value) {
                this.props.dispatch({
                    type: 'REMOVE_VIDEOGAME',
                    payload: this.props.product,
                    })
                    Swal.fire(
                        'Success!',
                        'Games rented! Enjoy!',
                        'success'
                    )
            }
          })
        this.props.history.push('/');
    }

    render() {

        return (
            <div className="searchDiv">
                <h1>Checkout</h1>
                {/* Display items in the rental cart */}
                <ul className="rentList">
                {this.props.reduxState.rentReducer.map((game) => {
                       return (
                           <>
                           <li>{game.name}</li>
                           <li><img src={game.image.icon_url}/></li>
                           </>
                       );
                   })} 
                </ul>
                <Button variant="outline-success" onClick={this.handleCheckout}>Complete Rental</Button>
            </div>
        )
    }
}

   // export the searchReduxState via connect
   const searchReduxState = (reduxState) => ({
    reduxState
  })

export default connect(searchReduxState) (Checkout);