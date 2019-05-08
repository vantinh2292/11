import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'shards-react';
import {actionUpdateLabel} from '../../redux/actions/labelAction'
class LabelFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idLabel: '',
            text: '',
            left: '',
            top: ''
        }
    }
    isChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            [name]: value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.idLabel !== this.props.idLabel) {
            this.setState({
                idLabel: this.props.idLabel,
                text: this.props.text,
                left: this.props.left,
                top: this.props.top
            })
        }
      }
    render() {
        return (
            <Col sm="12" md="4" lg="3">
                <h4 style={{textAlign:"center"}}>CHANGE LABEL PARAMETER</h4>
                <form key={this.props.idLabel}>
                    <div className="form-group">
                        <small id="idLabel" className="form-text text-muted">ID Label</small>
                        <input defaultValue={this.props.idLabel} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="idLabel" id="idLabel" aria-describedby="helpIdTitle" placeholder="ID Label: " />

                        <small id="text" className="form-text text-muted">Name Text</small>
                        <input defaultValue={this.props.text} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="text" id="text" aria-describedby="helpIdTitle" placeholder="Name Text: " />

                        <small id="left" className="form-text text-muted">Left</small>
                        <input defaultValue={this.props.left} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="left" id="left" aria-describedby="helpIdTitle" placeholder="Left: " />

                        <small id="top" className="form-text text-muted">Top</small>
                        <input defaultValue={this.props.top} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="top" id="top" aria-describedby="helpIdTitle" placeholder="Top: " />
                    </div>
                    <button type="button" onClick=
                    {() => this.props.actionUpdateLabel({
                        idLabel:this.state.idLabel, 
                        text:this.state.text, 
                        left:this.state.left, 
                        top:this.state.top, 
                    })}
                     className="btn btn-primary btn-block">Update</button>
                </form>
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idLabel: state.label.idLabel,
        text: state.label.text,
        left: state.label.left,
        top: state.label.top
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionUpdateLabel: (editItem) => {
            dispatch(actionUpdateLabel(editItem))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LabelFormEdit);