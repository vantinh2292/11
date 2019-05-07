import React, { Component } from 'react'
import { firebaseConnection } from '../../firebase';
import img from '../../images/PnlSynoptic_Tramtronbetong.png'
import CSC_R from '../../images/CSC_R.gif'
import SG1_R from '../../images/SG1_R.gif'
import MIX1_R from '../../images/MIX1_R.gif'
import SGMIX_R from '../../images/SGMIX_R.gif'
import CR1_R from '../../images/CR1_R.gif'
import CC2_R from '../../images/CC2_R.gif'
import BE2_R from '../../images/BE2_R.gif'
import Image from './Image';
import Label from './Label';
export default class ConcreteMixing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirebaseImage: [],
            dataFirebaseLabel: [],
        }
    }
    componentWillMount() {
        var datasnapshot = firebaseConnection.database().ref('Table1/Image');
        // var datasnapshot = firebaseConnection.database().ref('Table1/Note').orderByChild('metrics/views');
        datasnapshot.on('value', (images) => {
            let arrData = [];
            images.forEach(element => {
                const key = element.key;
                const src = element.val().src;
                const left = element.val().left;
                const top = element.val().top;
                arrData.push({
                    key: key,
                    src: src,
                    left: left,
                    top: top
                });
            });
            this.setState({
                dataFirebaseImage: arrData
            })
        })
        //connect label
        datasnapshot = firebaseConnection.database().ref('Table1/Label');
        datasnapshot.on('value', (labels) => {
            let arrData = [];
            labels.forEach(element => {
                const key = element.key;
                const text = element.val().text;
                const left = element.val().left;
                const top = element.val().top;
                arrData.push({
                    key: key,
                    text: text,
                    left: left,
                    top: top
                });
            });
            this.setState({
                dataFirebaseLabel: arrData
            })
        })
    }
    getImage = () => {
        const arrImage = [
            {
                src: CSC_R,
                name: 'CSC'
            },
            {
                src: SG1_R,
                name: 'SG1'
            },
            {
                src: MIX1_R,
                name: 'MIX1'
            },
            {
                src: SGMIX_R,
                name: 'SGMIX'
            },
            {
                src: CR1_R,
                name: 'CR1'
            },
            {
                src: CC2_R,
                name: 'CC2'
            },
            {
                src: BE2_R,
                name: 'BE2'
            }
        ];
        if (this.state.dataFirebaseImage.length > 0) {
            return this.state.dataFirebaseImage.map((value, key) => {
                const temp = arrImage.find(x => x.name === value.src).src;
                return (
                    <Image
                        key={key}
                        url={temp}
                        top={value.top}
                        left={value.left} />
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
                        text={value.text}
                        top={value.top}
                        left={value.left} />
                )
            })
        }
    }
    render() {
        return (
            <div style={{ overflow: "auto" }}>
                <div className="tramtronbetong" style={{ backgroundImage: `url(${img})`, position: 'relative' }}>
                    {this.getImage()}
                    {this.getLabel()}
                </div>
            </div >
        )
    };

}

