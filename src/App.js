import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders : [],
      items : [
        {
          id: '1',
          title: 'Yellow Chair',
          img: '1.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'chairs',
          price: '49',
        },
        {
          id: '2',
          title: 'Grey Chair',
          img: '2.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'chairs',
          price: '40',
        },
        {
          id: '3',
          title: 'Yin Yang Table',
          img: '3.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'tables',
          price: '89',
        },
        {
          id: '4',
          title: 'Light Table',
          img: '4.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'tables',
          price: '59',
        },
        {
          id: '5',
          title: 'Princess Bed',
          img: '5.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'beds',
          price: '219',
        },
        {
          id: '6',
          title: 'Purple Paradise',
          img: '6.jpg',
          desc: 'Excepteur amet voluptate laborum minim id excepteur aliquip qui dolor pariatur.',
          category: 'beds',
          price: '150',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} />
      <Products items={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
  );
}
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
      isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;




