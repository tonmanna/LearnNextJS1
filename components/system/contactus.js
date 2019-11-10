import React, { Component } from 'react';
class ContactUs extends Component {
    shoot() {
        alert("Great Shot!");
    }
    render() {
        return (
            <>
                <div className="form-label-group">
                    <label htmlFor="inputEmail">Message : </label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" autoComplete="off" />
                </div>
                <div className="from-group">
                    <button className="btn btn-info" onClick={this.shoot} >Click</button>
                </div>
            </>)
    }
}
export default ContactUs;
