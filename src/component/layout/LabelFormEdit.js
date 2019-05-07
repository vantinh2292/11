import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionPushLabel} from '../../redux/actions/noteAction'
class LabelFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                i: this.props.ItemChoise,
                titleNote: this.props.editItem.titleNote,
                contentNote: this.props.editItem.contentNote
            })
        }
    }
    render() {
        return (
            <div className="col-4">
                <h4>ADD LABEL</h4>
                <form key={this.props.ItemChoise}>
                    <div className="form-group">
                        <label htmlFor="titleNote">ADD LABEL</label>
                        <input defaultValue={this.props.imageChoise.idImage} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="text" id="text" aria-describedby="helpIdTitle" placeholder="Label: " />
                        <small id="helpIdTitle" className="form-text text-muted">LABEL:</small>

                        <input defaultValue={this.props.imageChoise.src} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="left" id="left" aria-describedby="helpIdTitle" placeholder="left: " />
                        <small id="helpIdTitle" className="form-text text-muted">LEFT:</small>

                        <input defaultValue={this.props.editItem.titleNote} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="top" id="top" aria-describedby="helpIdTitle" placeholder="top: " />
                        <small id="helpIdTitle" className="form-text text-muted">TOP:</small>
                    </div>
                    <button type="reset" onClick={() => this.props.actionEditData({titleNote:this.state.titleNote, contentNote:this.state.contentNote}) } className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editItem: state.note.editItem,
        ItemChoise: state.note.ItemChoise,
        titleForm: state.note.titleForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionPushLabel: (editItem) => {
            dispatch(actionPushLabel(editItem))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LabelFormEdit);