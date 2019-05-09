import React, { Component } from 'react'

export default class ForceElement extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="ForceButton" style={{ position: 'absolute', left: -100, top: -100, zIndex: 1, width: 300 }}>
                        <div id="ForceButton_Text" style={{ fontSize: 30, color: 'red', backgroundColor: 'darkcyan', display: 'flex', justifyContent: 'center' }}>12312312321
            </div>
                        <div className="btn-group" style={{ width: 300 }}>
                            <button id="RunClick" type="button" style={{ width: 100, fontSize: 25 }} className="btn btn-primary">RUN</button>
                            <button id="AutoClick" type="button" style={{ width: 100, fontSize: 25 }} className="btn btn-success">AUTO</button>
                            <button id="StopClick" type="button" style={{ width: 100, fontSize: 25 }} className="btn btn-danger">STOP</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
