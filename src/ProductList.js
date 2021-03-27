import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>Product List</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
           <th>Product Name</th>
              <th>Quantity PerUnit</th>
              <th>Quantity PerUnit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((products) => (
              <tr key={products.id}>
                <th scope="row">{products.id}</th>
                <td>{products.productName}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.unitPrice}</td>
                <td>{products.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(products)} color="info">Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
