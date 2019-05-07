import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionEditData} from '../../redux/actions/noteAction'
class ImageFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idImage: '',
            src: '',
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
                <h4>CHANGE IMAGE PARAMETER</h4>
                <form key={this.props.ItemChoise}>
                    <div className="form-group">
                        <label htmlFor="titleNote">CHANGE IMAGE PARAMETER</label>
                        <input defaultValue={this.props.imageChoise.idImage} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="idImage" id="idImage" aria-describedby="helpIdTitle" placeholder="ID IMAGE: " />
                        <small id="helpIdTitle" className="form-text text-muted">ID IMAGE</small>

                        <input defaultValue={this.props.imageChoise.src} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="src" id="src" aria-describedby="helpIdTitle" placeholder="ID IMAGE: " />
                        <small id="helpIdTitle" className="form-text text-muted">ID IMAGE</small>
                        <input defaultValue={this.props.editItem.titleNote} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="idImage" id="idImage" aria-describedby="helpIdTitle" placeholder="ID IMAGE: " />
                        <small id="helpIdTitle" className="form-text text-muted">ID IMAGE</small>
                        <input defaultValue={this.props.editItem.titleNote} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="idImage" id="idImage" aria-describedby="helpIdTitle" placeholder="ID IMAGE: " />
                        <small id="helpIdTitle" className="form-text text-muted">ID IMAGE</small>
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
        actionEditData: (editItem) => {
            dispatch(actionEditData(editItem))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageFormEdit);