import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {actionToggleEdit,actionToggleNew,actionDeleteData} from '../../redux/actions/noteAction'
class NoteItem extends Component {
render() {
    const { i, titleNote, contentNote,createAt,actionToggleEdit,actionToggleNew,actionDeleteData } = this.props;
    return (
        <div>
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#noteContent" + i} aria-expanded="true" aria-controls="noteContent1">
                            {titleNote} - {moment(createAt).calendar()}
                        </a>
                        <div className="btn-group float-right">
                            <button onClick={()=>actionToggleEdit(i,{titleNote,contentNote})} className='btn btn-outline-info'>Sửa</button>
                            <button onClick={()=>actionDeleteData(i)} className='btn btn-outline-danger'>Xóa</button>
                            <button onClick={actionToggleNew} className='btn btn-outline-success'>Thêm</button>
                        </div>
                    </h5>
                </div>
                <div id={"noteContent" + i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {contentNote}
                    </div>
                </div>
            </div>
        </div>
    )
}
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.note.isEdit,
        ItemChoise:state.note.ItemChoise
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionToggleEdit: (ItemChoising,editItem) => {
            dispatch(actionToggleEdit(ItemChoising,editItem))
        },
        actionToggleNew: () => {
            dispatch(actionToggleNew())
        },
        actionDeleteData: (index) => {
            dispatch(actionDeleteData(index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);