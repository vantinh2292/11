import React, { Component } from 'react'
import { Col, Row, Container, Card, CardHeader, CardBody } from 'shards-react';
import MainSideBar from './MainSideBar/MainSideBar'
import { connect } from 'react-redux';
import routeMainSideBar from './MainSideBar/data/routeMainSideBar'
import {actionToggleTrueNavPageFull,actionToggleFalseNavPageFull} from '../../redux/actions/navAction'
class DashboardChart extends Component {
    componentWillMount(){
        this.props.actionToggleTrueNavPageFull()
    }
    componentWillUnmount(){
        this.props.actionToggleFalseNavPageFull()
    }
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
                        <Card className="mx-auto mt-5" style={{ maxWidth: "1000px" }}>
                            <CardHeader>CHART DEMO</CardHeader>
                            <CardBody >
                                {routeMainSideBar.map((item, key) => (
                                    this.props.index === item.index ? <item.layout key={key} width={item.with} height={item.height}></item.layout> : ''
                                ))
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    index: state.navPageFull.index
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionToggleTrueNavPageFull: () => {
            dispatch(actionToggleTrueNavPageFull())
        },
        actionToggleFalseNavPageFull: () => {
            dispatch(actionToggleFalseNavPageFull())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardChart);