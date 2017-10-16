import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

class WineList extends Component {
  constructor() {
    super();

    this.state = {
      wines: [],
      newWine: {
        name: "",
        year: "",
        price: "",
        description: "",
        grapes: "",
        region: "",
        picture: "",
        country: ""
      }
    }
  }

  componentDidMount() {
    axios.request({
      method: "GET",
      url: "http://myapi-profstream.herokuapp.com/api/d79974/wines"
    })
    .then((response) => {
      this.setState({
        wines: response.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState(update(this.state, {
      newWine: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.request({
      method: "POST",
      url: "http://myapi-profstream.herokuapp.com/api/d79974/wines",
      data: this.state.newWine
    })
    .then((response) => {
      this.setState(update(this.state, {
        $merge: {
          wines: this.state.wines.concat(response.data)
        }
      }));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
        	<div className="margin-top-20">
        		<button data-toggle="modal" data-target="#add-wine-modal" className="btn btn-primary">Add New Wine</button>
        	</div>

          {this.state.wines.map((wine, index) => {
            return (
            	<div key={index} className="row margin-top-20 wine-container">
            		<div className="col-sm-3">
            			<img src={wine.picture} className="img-responsive" />
            		</div>
            		<div className="col-sm-9">
            			<div className="margin-top-20">
            				<span className="bold">Name: </span><span>{wine.name}</span>
            			</div>
            			<div>
            				<span className="bold">Year: </span><span>{wine.year}</span>
            			</div>
            			<div>
            				<span className="bold">Grapes: </span><span>{wine.grapes}</span>
            			</div>
            			<div>
            				<span className="bold">Country: </span><span>{wine.country}</span>
            			</div>
            			<div>
            				<span className="bold">Region: </span><span>{wine.region}</span>
            			</div>
            			<div>
            				<span className="bold">Price: </span><span>{wine.price}</span>
            			</div>
            			<div>
            				<span className="bold">Description: </span>
            			</div>
            			<div className="margin-top-10">
            				{wine.description}
            			</div>
            			<div className="margin-top-20">
            				<a href="#" className="btn btn-default">Edit Wine</a>
            			</div>
            		</div>
            	</div>
            );
          }) }
        </div>

        <div id="add-wine-modal" className="modal fade">
        	<div className="modal-dialog">
        		<div className="modal-content">
              <form onSubmit={this.handleSubmit.bind(this)}>
          			<div className="modal-header">
          				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          				<h4 className="modal-title">Add New Wine</h4>
          			</div>
          			<div className="modal-body">
          				<div className="bold">
          					Name
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="name" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Year
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="year" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Grapes
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="grapes" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Country
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="country" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Region
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="region" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Price
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="price" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Picture
          				</div>
          				<div className="margin-top-20">
          					<input onChange={this.handleChange.bind(this)} name="picture" type="text" className="form-control" />
          				</div>
          				<div className="bold margin-top-20">
          					Description
          				</div>
          				<div className="margin-top-20">
          					<textarea onChange={this.handleChange.bind(this)} name="description" className="form-control"></textarea>
          				</div>
          			</div>
          			<div className="modal-footer">
          				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          				<button type="submit" className="btn btn-primary">Save Wine</button>
          			</div>
              </form>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default WineList;
