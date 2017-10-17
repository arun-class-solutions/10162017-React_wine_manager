import React, { Component } from "react";
import axios from "axios";

class EditWine extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      description: "",
      country: "",
      region: "",
      grapes: "",
      picture: "",
      year: ""
    }
  }

  componentDidMount() {
    axios.request({
      method: "GET",
      url: "http://myapi-profstream.herokuapp.com/api/d79974/wines/" + this.props.match.params.id
    })
    .then((response) => {
      this.setState(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container well margin-top-20 small-container">
      	<div>
      		<a href="">Go Back</a>
      	</div>
      	<div className="bold margin-top-20">
      		Name
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.name} />
      	</div>
      	<div className="bold margin-top-20">
      		Year
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.year} />
      	</div>
      	<div className="bold margin-top-20">
      		Grapes
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.grapes} />
      	</div>
      	<div className="bold margin-top-20">
      		Country
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.country} />
      	</div>
      	<div className="bold margin-top-20">
      		Region
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.region} />
      	</div>
      	<div className="bold margin-top-20">
      		Price
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.price} />
      	</div>
      	<div className="bold margin-top-20">
      		Picture
      	</div>
      	<div className="margin-top-20">
      		<input type="text" className="form-control" value={this.state.picture} />
      	</div>
      	<div className="bold margin-top-20">
      		Description
      	</div>
      	<div className="margin-top-20">
      		<textarea className="form-control" value={this.state.description}></textarea>
      	</div>
      	<div className="margin-top-20">
      		<a href="" className="btn btn-default">Cancel</a>
      		<button type="submit" className="btn btn-success">Submit Edits</button>
      	</div>
      </div>
    );
  }
}

export default EditWine;
