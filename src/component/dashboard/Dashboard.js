import React, { Component } from 'react'
import { connect } from 'react-redux';
import NoteList from '../note/NoteList';
import NoteFormEdit from '../layout/NoteFormEdit';
import NoteFormNew from '../layout/NoteFormNew';
import { Redirect } from 'react-router-dom';
class Dashboard extends Component {
    render() {
        const { uid } = this.props;
        if (!uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <NoteList />
                        {this.props.hienthiFormEdit ? <NoteFormEdit /> : ""}
                        {this.props.hienthiFormNew ? <NoteFormNew /> : ""}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hienthiFormEdit: state.note.isEdit,
        hienthiFormNew: state.note.isNew,
        uid: state.firebase.auth.uid
    }
}
export default connect(mapStateToProps)(Dashboard);