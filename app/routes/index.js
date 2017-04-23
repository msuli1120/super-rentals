import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('rental');
  },
  actions: {
    saveRental3: function(params){
      var newRental = this.store.createRecord('rental',params);
      newRental.save();
      this.transitionTo('index');
    },
    update(rental, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental: function(rental){
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
