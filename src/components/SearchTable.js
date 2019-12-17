import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchTable extends Component {

    addProductToCart = () => {
        console.log(this.props.game);
        // TODO: Dispatch here
        this.props.dispatch({type: 'RENT_VIDEOGAME', payload: this.props.game})
    }

    render() {
        return (
            <tr key={this.props.game.i}>
                <td>{this.props.game.name}</td>
                <td><img src={this.props.game.image.icon_url}/></td>
                <td>{this.props.game.deck}</td>
                <td><button onClick={this.addProductToCart}>Rent Game</button></td>
            </tr>
        )
    }
}

const searchReduxState = (reduxState) => ({
    reduxState
})

export default connect(searchReduxState) (SearchTable);