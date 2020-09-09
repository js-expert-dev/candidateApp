import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    candidates: [
      {
        name: 'aleem',
        phone: 12345678,
        email: 'aleem@gmail.com',
        city: 'hafizabad',
        country: 'pakistan',
        skills: 'Coding, css, html',
      },
      {
        name: 'ali',
        phone: 12345678,
        email: 'ali@gmail.com',
        city: 'hafizabad',
        country: 'pakistan',
        skills: 'Coding, css, html',
      },
    ],
    search: '',
  };

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  };
  filterItems = () => {
    if (this.state.candidates?.length > 0) {
      return this.state.candidates?.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      });
    } else {
      return [];
    }
  };

  componentDidUpdate() {
    const { data } = this.props.location;
    if (data) {
      const { candidates } = this.state;
      candidates.push(data);
    }
  }

  onFormSubmit = (data) => {};
  render() {
    let items = this.filterItems();
    const { search } = this.state;
    return (
      <div className="container mt-4">
        <div className="content-header d-flex mb-2 align-items-center justify-content-between">
          <div>
            <h3 className="content-header-title mb-0">Candidates</h3>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push('/candidate/add')}
            >
              Add Candidates
            </button>
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search candidate here"
            value={search}
            onChange={this.updateSearch}
          />
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Skills</th>
            </thead>
            <tbody>
              {items.map((candidate) => (
                <tr>
                  <td>{candidate.name} </td>
                  <td>{candidate.phone} </td>
                  <td>{candidate.email} </td>
                  <td>{candidate.country} </td>
                  <td>{candidate.city} </td>
                  <td>{candidate.skills} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
