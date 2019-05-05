import React, { Component } from 'react';
import { firebaseConnection } from '../firebase';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';
import {actionToggleNewTrue} from '../redux/actions/noteAction'
class NoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() {
        var datasnapshot = firebaseConnection.database().ref('Table1/Note').orderByChild('createAt').limitToLast(10);
        // var datasnapshot = firebaseConnection.database().ref('Table1/Note').orderByChild('metrics/views');
        datasnapshot.on('value', (notes) => {
            var arrData = [];
            notes.forEach(element => {
                const key = element.key;
                const titleNote = element.val().titleNote;
                const contentNote = element.val().contentNote;
                const createAt=element.val().createAt;
                arrData.push({
                    key: key,
                    titleNote: titleNote,
                    contentNote: contentNote,
                    createAt:createAt
                });
            });
            this.setState({
                dataFirebase: arrData.reverse()
            })
            if (this.state.dataFirebase.length===0) {
                this.props.actionToggleNewTrue();
            }
        })
    }
    getData = () => {
        if (this.state.dataFirebase.length>0) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem
                        key={key}
                        i={value.key}
                        titleNote={value.titleNote}
                        contentNote={value.contentNote}
                        createAt={value.createAt}
                    />
                )
            })
        }
    };
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isNew: state.note.isNew
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionToggleNewTrue: () => {
            dispatch(actionToggleNewTrue())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteList);