import React, { Component } from 'react'
import { Col, Row, Container } from 'shards-react';
import MainSideBar from './MainSideBar/MainSideBar'
import { connect } from 'react-redux';
import routeMainSideBar from './MainSideBar/data/routeMainSideBar'
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
                    {routeMainSideBar.map((item,key)=>(
                            this.props.index===item.index?<item.layout key={key}></item.layout>:''
                        ))
                    }
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