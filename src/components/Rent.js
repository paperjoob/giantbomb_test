import React, { Component } from 'react';
import { connect } from 'react-redux';

import Swal from 'sweetalert2';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Checkout extends Component {

    handleCheckout = (event) => {
        event.preventDefault();
        // TODO: Clear the cart and navigate to the home page, IF  confirm is clicked
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
                    type: 'CLEAR_CART',
                    payload: this.props.product,
                    })
                    Swal.fire(
                        'Success!',
                        'Games rented! Enjoy!',
                        'success'
                    )
                    this.props.history.push('/');
            }
          })
    }

    render() {

        return (
            <div className="searchDiv">
                <h1>Checkout</h1>
                {/* Display items in the rental cart */}
                {this.props.reduxState.rentReducer.length === 0 ?
                    <div></div>
                :
                <>
                <Table className="rentList">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                        </tr>
                {this.props.reduxState.rentReducer.map((game, i) => {
                       return (
                           <tr key={i}>
                           <td>{game.name}</td>
                           <td><img src={game.image.icon_url} alt="video game image" /></td>
                           </tr>
                       );
                   })} 
                   </tbody>
                </Table>
                <Button variant="outline-dark" onClick={this.handleCheckout}>Complete Rental</Button>
                </>
                }
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
            </div>
        )
    }
}

   // export the searchReduxState via connect
   const searchReduxState = (reduxState) => ({
    reduxState
  })

export default connect(searchReduxState) (Checkout);