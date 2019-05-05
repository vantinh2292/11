import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionAddData} from '../redux/actions/noteAction'
class NoteFormNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: '',
            titleNote: '',
            contentNote: ''
        }
    }
    isChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            [name]: value
        });
    };
    addData = (title, content) => {
            this.props.addDataFirebase({
                titleNote: title,
                contentNote: content
            });
    }
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
                <h4>TẠO MỚI NOTE</h4>
                <form key={this.props.i}>
                    <div className="form-group">
                        <label htmlFor="titleNote">TẠO MỚI NOTE</label>
                        <input defaultValue={this.props.editItem.titleNote} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="titleNote" id="titleNote" aria-describedby="helpIdTitle" placeholder="Tiêu đề note" />
                        <small id="helpIdTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                        <textarea defaultValue={this.props.editItem.contentNote} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="contentNote" id="contentNote" aria-describedby="helpIdTitle" placeholder="Nội dung note" />
                        <small id="helpIdContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={() => { this.props.actionAddData({titleNote:this.state.titleNote, contentNote:this.state.contentNote})}} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editItem: state.note.editItem,
        ItemChoise: state.note.ItemChoise,
        titleForm:state.note.titleForm,
        isEdit:state.note.isEdit,
        isNew:state.note.isNew
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionAddData: (newItem) => {
            dispatch(actionAddData(newItem))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteFormNew);