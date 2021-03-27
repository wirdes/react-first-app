import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categorys: [],
    
  };
  componentDidMount(){
    this.getCategories();
  }
  getCategories = ()=>{
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data =>this.setState({categorys:data}));

  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categorys.map((category) => (
            <ListGroupItem active= {category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
