import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import LineChart from './chart/LineChart';
import BarDiscreteChart from './chart/BarDiscreteChart';
import PieAgeChart from './chart/PieAgeChart';
import PieLocationChart from './chart/PieLocationChart';
import MultiBarChart from './chart/MultiBarChart';

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
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Keyword trending</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Discrete Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarDiscreteChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Stacked/Grouped Multi-Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <MultiBarChart />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Nvd3Chart;
