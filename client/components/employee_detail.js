import React from 'react';
import { image } from 'faker';

const EmployeeDetail = ({employee}) => {

    const {name ,email , phone} = employee;
    const avatar = image.avatar();
    return (

        <div className="thumbnail">
            <img src={avatar} />
            <div className="caption">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeDetail;