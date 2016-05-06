import Ember from 'ember';
import LineItem from '../models/line-item';
import Order from '../models/order';
import Product from '../models/product';


export default Ember.Service.extend({
  getOrderById(id) {
    const orders = this.getOrders();
    return orders.findBy('id', id);
  },

  getOrders() {
    return [{
      id: '1',
      name: 'Nate'
    }, {
      id: '2',
      name: 'Gregg'
    }];
  }
});
