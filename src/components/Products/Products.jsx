import React, { Component } from 'react'
import Item from './Item'

export class Products extends Component {
    render() {
        return (
        <main className='add-to-cart'>
            {this.props.items.map(el => (
                <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
            ))}
        </main>
        )
    }
}

export default Products
