import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionChangeIndex } from '../../../../redux/actions/navAction'
import { NavItem, NavLink } from "shards-react";
class SidebarNavItem extends Component {
  render() {
    const {item,index}=this.props
    return (
      <NavItem onClick={()=>this.props.actionChangeIndex(item.index)}>
        <NavLink active={index===item.index?true:false}>
          {item.title && <span>{item.title}</span>}
        </NavLink>
      </NavItem>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  index:state.navPageFull.index
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionChangeIndex: (index) => {
      dispatch(actionChangeIndex(index))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavItem);
