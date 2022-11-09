import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import InsightsImage from '../../assets/images/insights/graphic_investment.svg';
import '../../assets/scss/partials/pages/insights.scss';

import Select from 'react-select';

const propertyTypesOptions = [
    { value: 'Nhà mặt phố', label: 'Nhà mặt phố' },
    { value: 'Shophouse', label: 'Shophouse' },
    { value: 'Căn hộ chung cư', label: 'Căn hộ chung cư' },
    { value: 'Khu đô thị mới', label: 'Khu đô thị mới' },
    { value: 'Dự án khác', label: 'Dự án khác' },
    { value: 'Căn hộ chung cư', label: 'Căn hộ chung cư' },
  ];

const provinceOptions = [
  { value: 'Phú Quốc, Kiên Giang', label: 'Phú Quốc, Kiên Giang' },
  { value: 'Dĩ An, Bình Dương', label: 'Dĩ An, Bình Dương' },
  { value: 'Bàu Bàng, Bình Dương', label: 'Bàu Bàng, Bình Dương' },
  { value: 'Bến Cát, Bình Dương', label: 'Bến Cát, Bình Dương' },
  { value: 'Phú Giáo, Bình Dương', label: 'Phú Giáo, Bình Dương' },
  { value: 'Tân Uyên, Bình Dương', label: 'Tân Uyên, Bình Dương' },
  { value: 'Thuận An, Bình Dương', label: 'Thuận An, Bình Dương' },
];

const priceOptions = [
    { value: '< 2 tỷ', label: '< 2 tỷ' },
    { value: '2 - 3 tỷ', label: '2 - 3 tỷ' },
    { value: '3 - 5 tỷ', label: '3 - 5 tỷ' },
    { value: '5 - 7 tỷ', label: '5 - 7 tỷ' },
    { value: '> 7 tỷ', label: '> 7 tỷ' },
  ];


const InsightsPage = () => {
    const [selectedPropertyTypesOption, setSelectedPropertyTypesOption] = useState(null);
    const [selectedProvinceOption, setSelectedProvinceOption] = useState(null);
    const [selectedPriceOption, setSelectedPriceOption] = useState(null);

    return (
        <React.Fragment>
            <Row>
                <Col>
                <Card className="insights">
                        <Card.Header>
                            <Card.Title as="h5">Please tell us what you want to sell</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Property type</Form.Label>
                                            <Select
                                                defaultValue={selectedPropertyTypesOption}
                                                onChange={setSelectedPropertyTypesOption}
                                                options={propertyTypesOptions}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Province/City</Form.Label>
                                            <Select
                                                defaultValue={selectedProvinceOption}
                                                onChange={setSelectedProvinceOption}
                                                options={provinceOptions}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Price range</Form.Label>
                                            <Select
                                                defaultValue={selectedPriceOption}
                                                onChange={setSelectedPriceOption}
                                                options={priceOptions}
                                            />
                                        </Form.Group>
                                        <ButtonGroup className="d-flex">
                                            <Button variant="danger">View consumer insights</Button>
                                        </ButtonGroup>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Image src={InsightsImage} responsive="true" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default InsightsPage;
