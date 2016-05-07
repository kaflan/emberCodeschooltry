import Ember from 'ember';
import LineItem from 'codeschool/models/line-item';
import Order from 'codeschool/models/order';
import Product from 'codeschool/models/product';


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
