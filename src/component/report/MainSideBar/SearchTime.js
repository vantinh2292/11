import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import MaterialUIPickers from '../../layout/picker/MaterialUIPicker'
import Button from '@material-ui/core/Button';
export default class SearchTime extends Component {
  render() {
    return (
      <Card className='container center mt-5' style={{maxWidth:600}}>
        <h2 style={{justifyContent:'center',display:'flex'}}>Time Start</h2>
        <MaterialUIPickers style={{justifyContent:'center',display:'flex'}}/>
        <h2 style={{justifyContent:'center',display:'flex'}}>Time End</h2>
        <MaterialUIPickers style={{justifyContent:'center',display:'flex'}}/>
        <div className="dropdown-divider"></div>
        <Button variant="contained" color="primary" style={{margin:'auto',display:'flex'}}>SEARCH</Button>
        <div className="dropdown-divider"></div>
      </Card>
    )
  }
}
