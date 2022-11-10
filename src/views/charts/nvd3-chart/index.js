import React from 'react';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

import LineChart from './chart/LineChart';
import BarDiscreteChart from './chart/BarDiscreteChart';
import BarDiscreteChartPropertyType from './chart/BarDiscreteChartPropertyType';
import BarDiscreteChartBedroom from './chart/BarDiscreteChartBedroom';
import BarDiscreteChartDirection from './chart/BarDiscreteChartDirection';
import PieAgeChart from './chart/PieAgeChart';
import PieLocationChart from './chart/PieLocationChart';
import RadarChart from './chart/RadarChart';
import WordCloud from './chart/WordCloud';

const Nvd3Chart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Age</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <PieAgeChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Location</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <PieLocationChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Search trending</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Content - The most popular keywords viewed</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <WordCloud />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Attributes - Your consumer is interested in</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tabs variant="pills" defaultActiveKey="property-type">
                                <Tab eventKey="property-type" title="Property type">
                                    <BarDiscreteChartPropertyType />
                                </Tab>
                                <Tab eventKey="profile" title="Pricing">
                                    <BarDiscreteChart />
                                </Tab>
                                <Tab eventKey="bedroom" title="Bedroom">
                                    <BarDiscreteChartBedroom /> 
                                </Tab>
                                <Tab eventKey="direction" title="Direction">
                                    <BarDiscreteChartDirection />
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={5}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Location insights</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RadarChart />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Nvd3Chart;
