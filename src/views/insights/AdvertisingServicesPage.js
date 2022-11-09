import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import lightImg from './../../assets/images/_light-bulb.png';

const AdvertisingServicesPage = () => {
    let listingKeywords = ['home owner', 'cheap price', 'home owner', 'cheap price', 'home owner'];
    let listingKeywordsHtml = [];
    listingKeywords.forEach((data, index) => {
        listingKeywordsHtml.push(
            <li style={{ display: 'inline', background: '#F2F2F2', borderRadius: '8px', marginRight: '8px', marginBottom: '8px', padding: '4px', color: '#2C2C2C' }}>
                {data}
            </li>);
    });

    let sponsoredListingKeywords = ['Apartment・2 bedrooms・Phu Giao, Binh Duong', 'Shophouse・Thu Dau Mot, Binh Duong', 'Apartment・South East・Dau Tieng, Binh Duong', 'Apartment・2 bedrooms・Binh Duong', 'Shophouse・Binh Duong'];
    let sponsoredListingKeywordsHtml = [];
    sponsoredListingKeywords.forEach((data, index) => {
        sponsoredListingKeywordsHtml.push(
            <li style={{ display: 'inline', background: '#F2F2F2', borderRadius: '8px', marginRight: '8px', marginBottom: '8px', padding: '4px', color: '#2C2C2C' }}>
                {data}
            </li>);
    });

    let bannerListingKeywords = ['Phu Giao, Binh Duong', 'Thu Dau Mot, Binh Duong', 'Dau Tieng, Binh Duong', 'Thuan An, Binh Duong', 'Di An, Binh Duong'];
    let bannerListingKeywordsHtml = [];
    bannerListingKeywords.forEach((data, index) => {
        bannerListingKeywordsHtml.push(
            <li style={{ display: 'inline', background: '#F2F2F2', borderRadius: '8px', marginRight: '8px', marginBottom: '8px', padding: '4px', color: '#2C2C2C' }}>
                {data}
            </li>);
    });

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <Card.Title as="h4" style={{ color: '#2C2C2C' }}>Listing</Card.Title>
                                    <span className="d-block m-t-5">Lorem Ipsum is simply dummy text
                                    </span>
                                </div>
                                <div>
                                    <Button variant="danger" className="text-capitalize">
                                        <i className="feather icon-plus mx-1" />
                                        Create now
                                    </Button>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <img style={{ with: '20px', height: '20px', marginTop: '2px', marginRight: '10px', marginLeft: '14px' }} src={lightImg} alt="activity-user" /> <p style={{ color: '#845D9C', fontSize: '18px', fontWeight: '500' }}>Top 5 keywords should write in your listing content</p>
                            </Row>
                            <Row>
                                <ul>{listingKeywordsHtml}</ul>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <Card.Title as="h4" style={{ color: '#2C2C2C' }}>Sponsored Listing</Card.Title>
                                    <span className="d-block m-t-5">Lorem Ipsum is simply dummy text
                                    </span>
                                </div>
                                <div>
                                    <Button variant="danger" className="text-capitalize">
                                        <i className="feather icon-plus mx-1" />
                                        Create now
                                    </Button>
                                </div>
                            </div>

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <img style={{ with: '20px', height: '20px', marginTop: '2px', marginRight: '10px', marginLeft: '14px' }} src={lightImg} alt="activity-user" /> <p style={{ color: '#845D9C', fontSize: '18px', fontWeight: '500' }}>Top 5 segments to cross marketing your listing</p>
                            </Row>
                            <Row>
                                <ul>{sponsoredListingKeywordsHtml}</ul>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <Card.Title as="h4" style={{ color: '#2C2C2C' }}>Advertising banner</Card.Title>
                                    <span className="d-block m-t-5">Lorem Ipsum is simply dummy text
                                    </span>
                                </div>
                                <div>
                                    <Button variant="danger" className="text-capitalize">
                                        <i className="feather icon-plus mx-1" />
                                        Contact us
                                    </Button>
                                </div>
                            </div>

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <img style={{ with: '20px', height: '20px', marginTop: '2px', marginRight: '10px', marginLeft: '14px' }} src={lightImg} alt="activity-user" /> <p style={{ color: '#845D9C', fontSize: '18px', fontWeight: '500' }}>Top 5 locations to run your sponsored listing</p>
                            </Row>
                            <Row>
                                <ul>{bannerListingKeywordsHtml}</ul>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <Card.Title as="h4" style={{ color: '#2C2C2C' }}>Promotion Article</Card.Title>
                                    <span className="d-block m-t-5">Lorem Ipsum is simply dummy text
                                    </span>
                                </div>
                                <div>
                                    <Button variant="danger" className="text-capitalize">
                                        <i className="feather icon-plus mx-1" />
                                        Create now
                                    </Button>
                                </div>
                            </div>

                        </Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvertisingServicesPage;
