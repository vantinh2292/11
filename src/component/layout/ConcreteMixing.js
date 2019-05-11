import React, { Component } from 'react'
import { Col, Row } from 'shards-react';
import { connect } from 'react-redux';
import ImageFormEdit from './ImageFormEdit';
import LabelFormEdit from './LabelFormEdit';
import LineFormAddHorizontal from './LineFormAddHorizontal';
import img from '../../images/PnlSynoptic_Tramtronbetong.png'
import CSC_R from '../../images/CSC_R.gif'
import CSC_S from '../../images/CSC_S.gif'
import SG1_R from '../../images/SG1_R.gif'
import SG1_S from '../../images/SG1_S.gif'
import MIX1_R from '../../images/MIX1_R.gif'
import MIX1_S from '../../images/MIX1_S.gif'
import SGMIX_R from '../../images/SGMIX_R.gif'
import SGMIX_S from '../../images/SGMIX_S.gif'
import CR1_R from '../../images/CR1_R.gif'
import CR1_S from '../../images/CR1_S.gif'
import CC2_R from '../../images/CC2_R.gif'
import CC2_S from '../../images/CC2_S.gif'
import BE2_R from '../../images/BE2_R.gif'
import BE2_S from '../../images/BE2_S.gif'
import Image from './Image';
import Label from './Label';
import LineHorizontal from './LineHorizontal';
import ForceElement from './ForceElement';
import { backgroundClick } from '../../redux/actions/backgroundAction'
import LineHorizontalAdd from './LineHorizontalAdd';
import { GetImage, GetLabel, GetLineHorizontal } from './GetData/FirebaseGetData';
class ConcreteMixing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirebaseImage: [],
            dataFirebaseLabel: [],
            dataFirebaseLineHorizontal: [],
        }
    }
    componentWillMount() {
        GetImage((result) => {
            this.setState({
                dataFirebaseImage: result
            })
        });
        GetLabel((result) => {
            this.setState({
                dataFirebaseLabel: result
            })
        })
        GetLineHorizontal((result) => {
            this.setState({
                dataFirebaseLineHorizontal: result
            })
        })
    }
    getLine = () => {
        if (this.state.dataFirebaseLineHorizontal.length > 0) {
            return this.state.dataFirebaseLineHorizontal.map((value, key) => {
                return (
                    <LineHorizontal
                        key={key}
                        length={value.length}
                        left={value.left}
                        top={value.top}
                    />
                )
            }
            )
        }
    }
    getImage = () => {
        const arrImage = [
            {
                src_R: CSC_R,
                src_S: CSC_S,
                name: 'CSC'
            },
            {
                src_R: SG1_R,
                src_S: SG1_S,
                name: 'SG1'
            },
            {
                src_R: MIX1_R,
                src_S: MIX1_S,
                name: 'MIX1'
            },
            {
                src_R: SGMIX_R,
                src_S: SGMIX_S,
                name: 'SGMIX'
            },
            {
                src_R: CR1_R,
                src_S: CR1_S,
                name: 'CR1'
            },
            {
                src_R: CC2_R,
                src_S: CC2_S,
                name: 'CC2'
            },
            {
                src_R: BE2_R,
                src_S: BE2_S,
                name: 'BE2'
            }
        ];
        if (this.state.dataFirebaseImage.length > 0) {
            return this.state.dataFirebaseImage.map((value, key) => {
                const imageView = arrImage.find(x => x.name === value.src)
                var src = '';
                if (value.stateElement === 1) src = imageView.src_R;
                if (value.stateElement === 0) src = imageView.src_S;
                return (
                    <Image
                        key={key}
                        i={value.key}
                        url={src}
                        src={value.src}
                        top={value.top}
                        left={value.left}
                        nameElement={value.nameElement}
                        stateElement={value.stateElement}
                    />
                )
            })
        }
    }
    getLabel = () => {
        if (this.state.dataFirebaseLabel.length > 0) {
            return this.state.dataFirebaseLabel.map((value, key) => {
                return (
                    <Label
                        key={key}
                        i={value.key}
                        text={value.text}
                        top={value.top}
                        left={value.left} />
                )
            })
        }
    }
    getLineAdd = () => {
        if (this.props.storeAddLine.length > 0) {
            return this.props.storeAddLine.map((value, key) => {
                return (
                    <LineHorizontalAdd
                        key={key}
                        lineLeft={value.addLineLeft}
                        lineTop={value.addLineTop}
                        lineLength={value.addLineLength}
                    />
                )
            })
        }
    }

    render() {
        return (
            <Row>
                {this.props.indexClick > 0 ? <ForceElement /> : ''}
                <Col style={{ overflow: "auto" }}>
                    <div onClick={this.props.backgroundClick} className="tramtronbetong" style={{ backgroundImage: `url(${img})`, position: 'relative' }}>
                        {this.getImage()}
                        {this.getLabel()}
                        {this.getLine()}
                        {this.props.addLineHorizontal === true ? this.getLineAdd() : ''}
                    </div>
                </Col >
                {this.props.editImage === true ? <ImageFormEdit /> : ''}
                {this.props.editLabel === true ? <LabelFormEdit /> : ''}
                {this.props.addLineHorizontal === true ? <LineFormAddHorizontal /> : ''}
            </Row>
        )
    };

}
const mapStateToProps = (state, ownProps) => ({
    editImage: state.auth.editImage,
    editLabel: state.auth.editLabel,
    addLineHorizontal: state.auth.addLineHorizontal,
    addLineVertical: state.auth.addLineVertical,
    editLine: state.auth.editLine,
    indexClick: state.background.indexClick,
    storeAddLine: state.line.addLine
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        backgroundClick: () => {
            dispatch(backgroundClick())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcreteMixing);