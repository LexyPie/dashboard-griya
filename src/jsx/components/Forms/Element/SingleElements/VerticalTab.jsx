import React from 'react'
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

export default function VerticalTab({ tabData }) {
    return (
        <>
        <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
            <Col sm={3} id="order-2">
                <Nav as="div" variant="pills" className="flex-column ms-2 text-uppercase">
                    {tabData.map((data, i) => (
                        <Nav.Item as="a" key={i}>
                            <Nav.Link eventKey={data.name.toLowerCase()}>
                                {data.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    {tabData.map((data, i) => (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                            <p>
                                {data.content}
                            </p>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Col>
            </Tab.Container>
        </>
    )
}
