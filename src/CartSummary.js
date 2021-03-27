import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  rS() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((e) => (
            <DropdownItem key={e.product.id}>
              <Badge
                color="danger"
                onClick={()=>this.props.removeFromCart(e.product)}
              >
                X
              </Badge>
              {e.product.productName}-- Miktar:
              <Badge color="success">{e.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="cart">Sepete Git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  rE() {
    return (
      <NavItem>
        <NavLink>Booşşş</NavLink>
      </NavItem>
      
    );
  }
  render() {
    return (
      <div>{this.props.cart.length>0?this.rS():this.rE()}
      </div>
    );
  }
}
