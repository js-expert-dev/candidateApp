import React, { Component } from 'react';

export default class AddCandidate extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    skills: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone, email, country, city, skills } = this.state;
    const data = {
      name,
      phone,
      email,
      country,
      city,
      skills,
    };
    debugger;
    // this.props.onFormSubmit(data);
    this.props.history.push({
      pathname: '/home',
      data: data,
    });
    debugger;
    this.setState(this.initialState);
  };

  render() {
    const { name, phone, email, country, city, skills } = this.state;
    return (
      <div className="container-fluid mt-4  ">
        <div className="d-flex  justify-content-center">
          <h3>Add Candidate</h3>
        </div>
        <div className="">
          <div className="row d-flex  justify-content-center">
            <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-12">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>
                    <b>Name :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Candidate Name"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Phone # :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    placeholder="phone number"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Email :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="email address"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Country :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                    placeholder="country"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>City :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                    placeholder="city"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Skills :</b>
                  </label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="skills"
                    value={skills}
                    onChange={this.handleChange}
                    placeholder="skills"
                  />
                </div>
                <button className="btn btn-outline-primary" type="submit">
                  <i className="fa fa-save"></i> &nbsp; Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
