import React, { Component } from "react";
import "./styles/Subscribe-form.css";

export default class SubscribeForm extends Component {
  render() {
    return (
      <>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content-sub">
                  <h1>subscribe to our newsletter</h1>
                  <div className="input-group">
                      <input type="text" placeholder="Enter Email" className="form-control"/>
                    <span className="input-group-btn">
                        <button className="sub-btn" type="submit">subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
