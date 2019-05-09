import React, { Component } from 'react'
import { Col, Row, Container } from 'shards-react';
import MainSideBar from './MainSideBar/MainSideBar'
import LineChart from './MainSideBar/layoutMainSideBar/LineChart'
import { connect } from 'react-redux';
class DashboardChart extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <MainSideBar />
                    <Col
                        className="main-content p-0"
                        lg={{ size: 10, offset: 2 }}
                        md={{ size: 9, offset: 3 }}
                        sm="12"
                        tag="main"
                    >
                        {this.props.index===1?<LineChart text='1'/>:''}
                        {this.props.index===2?<LineChart text='2'/>:''}
                        {this.props.index===3?<LineChart text='3'/>:''}
                        {this.props.index===4?<LineChart text='4'/>:''}
                        {this.props.index===5?<LineChart text='5'/>:''}
                        {this.props.index===6?<LineChart text='6'/>:''}
                        {this.props.index===7?<LineChart text='7'/>:''}
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    index:state.navPageFull.index
})

export default connect(mapStateToProps)(DashboardChart);