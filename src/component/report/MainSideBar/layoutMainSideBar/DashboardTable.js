import React, { Component } from 'react'
import SearchTime from './SearchTime'
import EnhancedTable from './EnhancedTable';
import { connect } from 'react-redux';
class DashboardTable extends Component {
 
  render() {
    return (
        <div>
      {!this.props.searched?<SearchTime/>:<EnhancedTable data={this.props.data}/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.searchTime.data,
        searched:state.searchTime.searched
    }
}
export default connect(mapStateToProps)(DashboardTable)