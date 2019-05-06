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
export default class ConcreteMixing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() {
        var datasnapshot = firebaseConnection.database().ref('Table1/Image');
        // var datasnapshot = firebaseConnection.database().ref('Table1/Note').orderByChild('metrics/views');
        datasnapshot.on('value', (images) => {
            var arrData = [];
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
                dataFirebase: arrData
            })
        })
    }
    getData = () => {
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
        if (this.state.dataFirebase.length > 0) {
            return this.state.dataFirebase.map((value, key) => {
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
    render() {
        return (
            <div style={{ overflow: "auto" }}>
                <div className="tramtronbetong" style={{ backgroundImage: `url(${img})`, position: 'relative' }}>
                    {this.getData()}
                </div>
            </div >
        )
    };

}

