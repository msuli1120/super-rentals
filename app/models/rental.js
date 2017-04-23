import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  image: DS.attr(),
  type: DS.attr(),
  bedrooms: DS.attr()
});
