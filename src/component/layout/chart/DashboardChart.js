import React, { Component } from 'react'
import { Col, Row, Container } from 'shards-react';
import MainSideBar from './MainSideBar/MainSideBar'
export default class DashboardChart extends Component {
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
                        {/* {!noNavbar && <MainNavbar />}
                        {children}
                        {!noFooter && <MainFooter />} */}
                    </Col>
                </Row>
            </Container>
        )
    }
}
