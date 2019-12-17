import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class SearchTable extends Component {

    addProductToCart = () => {
        console.log(this.props.game);
        // TODO: Dispatch here
        this.props.dispatch({type: 'RENT_VIDEOGAME', payload: this.props.game})
    }

    render() {
        return (
            <tr key={this.props.i}>
                <td>{this.props.game.name}</td>
                <td><img src={this.props.game.image.icon_url} alt="video game image"/></td>
                <td>{this.props.game.deck}</td>
                <td><Button variant="outline-dark" onClick={this.addProductToCart}>Rent Game</Button></td>
            </tr>
        )
    }
}

const searchReduxState = (reduxState) => ({
    reduxState
})

export default connect(searchReduxState) (SearchTable);