import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import NoteList from './NoteList'
import NoteFormEdit from './NoteFormEdit'
import NoteFormNew from './NoteFormNew'
class MainComponent extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <NoteList/>
                        {this.props.hienthiFormEdit?<NoteFormEdit/>:"" }
                        {this.props.hienthiFormNew?<NoteFormNew/>:"" }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hienthiFormEdit: state.note.isEdit,
        hienthiFormNew:state.note.isNew
    }
}
export default connect(mapStateToProps)(MainComponent);
