import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'shards-react';
import {actionUpdateImage} from '../../redux/actions/imageAction'
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

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.idImage !== this.props.idImage) {
            this.setState({
                idImage: this.props.idImage,
                src: this.props.src,
                left: this.props.left,
                top: this.props.top
            })
        }
      }
    render() {
        return (
            <Col sm="12" md="4" lg="3">
                <h4 style={{textAlign:"center"}}>CHANGE IMAGE PARAMETER</h4>
                <form key={this.props.idImage}>
                    <div className="form-group">
                        <small id="idImage" className="form-text text-muted">ID Image</small>
                        <input defaultValue={this.props.idImage} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="idImage" id="idImage" aria-describedby="helpIdTitle" placeholder="ID Image: " />

                        <small id="src" className="form-text text-muted">Name Image</small>
                        <input defaultValue={this.props.src} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="src" id="src" aria-describedby="helpIdTitle" placeholder="Name Image: " />

                        <small id="left" className="form-text text-muted">Left</small>
                        <input defaultValue={this.props.left} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="left" id="left" aria-describedby="helpIdTitle" placeholder="Left: " />

                        <small id="top" className="form-text text-muted">Top</small>
                        <input defaultValue={this.props.top} onChange={(evt) => { this.isChange(evt) }} type="text" className="form-control" name="top" id="top" aria-describedby="helpIdTitle" placeholder="Top: " />
                    </div>
                    <button type="button" onClick=
                    {() => this.props.actionUpdateImage({
                        idImage:this.state.idImage, 
                        src:this.state.src, 
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
        idImage: state.image.idImage,
        src: state.image.src,
        left: state.image.left,
        top: state.image.top
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionUpdateImage: (editItem) => {
            dispatch(actionUpdateImage(editItem))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageFormEdit);