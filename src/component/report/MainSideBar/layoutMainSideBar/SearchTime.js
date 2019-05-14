import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import MaterialUIPickers from '../../../layout/picker/MaterialUIPicker'
import Button from '@material-ui/core/Button';
import {actionUpdateTimeSearchTableReport} from '../../../../redux/actions/searchTimeAction'
class SearchTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeStart:'',
      timeEnd:''
    }
    this.onGetTimeStart=this.onGetTimeStart.bind(this);
  }
  onGetTimeStart=(timeStart)=>{
    if(typeof(timeStart)=='object'){
      this.setState({timeStart:Date.parse(timeStart)})
    }else this.setState({timeStart:timeStart})
  };
  onGetTimeEnd=(timeEnd)=>{
    if(typeof(timeEnd)=='object'){
      this.setState({timeEnd:Date.parse(timeEnd)})
    }else this.setState({timeEnd:timeEnd})
  };
  onClick=(()=>{
    this.props.actionUpdateTimeSearchTableReport({
      timeStart:this.state.timeStart,
      timeEnd:this.state.timeEnd
    })
  })
  render() {
    return (
      <Card className='container center mt-5' style={{ maxWidth: 600 }}>
        <h2 style={{ justifyContent: 'center', display: 'flex' }}>Time Start</h2>
        <MaterialUIPickers onGetTime={(time)=>this.onGetTimeStart(time)} style={{ justifyContent: 'center', display: 'flex' }} />
        <h2 style={{ justifyContent: 'center', display: 'flex' }}>Time End</h2>
        <MaterialUIPickers onGetTime={(time)=>this.onGetTimeEnd(time)} style={{ justifyContent: 'center', display: 'flex' }} />
        <div className="dropdown-divider"></div>
        <Button onClick={this.onClick} variant="contained" color="primary" style={{ margin: 'auto', display: 'flex' }}>SEARCH</Button>
        <div className="dropdown-divider"></div>
      </Card>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionUpdateTimeSearchTableReport: (object) => {
          dispatch(actionUpdateTimeSearchTableReport(object))
      },
  }
}

export default connect(null,mapDispatchToProps)(SearchTime)