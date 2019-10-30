import React, { Component } from 'react';
class ContactUs extends Component {
    render() {
        return (
            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" autoComplete="off" />
                <label htmlFor="inputEmail">Email address</label>
            </div>);
    }
}
export default ContactUs;
