import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 21;

class EmployeeList extends Component {
    //props.employees => array of employee objects
    componentWillMount() {
        this.page=1;
    }

    handleButtonClick = () => {
        Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
        this.page+=1;
    }

    render() {
        console.log(this.props.employees);
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map((employee, index) => <EmployeeDetail key={index} employee={employee} />)}
                </div>
                <button onClick={this.handleButtonClick} className="btn btn-primary">Load More...</button>
            </div>
        );
    }
};

export default createContainer(() => {
    // set up subcribtion
    Meteor.subscribe('employees', PER_PAGE);

    // return an object. Whatever we return will be sent to EmployeeList as Props
    return { employees: Employees.find({}).fetch() }
}, EmployeeList);;