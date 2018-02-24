import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image , helpers, random } from 'faker';

Meteor.startup(() => {
  // Place to generate Data

  // Check if data exists in the collection
  // see if the collection has any records
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    //Genarate data...
    _.times(5000 ,()=> {
      const { name, email, phone} = helpers.createCard();
      const avatar = image.avatar();

      Employees.insert({
        name, 
        email, 
        phone,
        avatar,
      });
    })
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});
