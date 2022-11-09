import React from 'react';
import { Row, Col, Card, Table, OverlayTrigger, Button, Tooltip, Form, FormControl } from 'react-bootstrap';
import { API_DATA_SERVER } from './../../config/constant';
import avatar2 from './../../assets/images/user/avatar-2.jpg';

const ContactAgentPage = () => {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://iceberg.linh.work/Insight/QueryAgent', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin",
            cache: "force-cache"
        }).then((response) => {
            response.json().then((data) => {
                setContacts(data.data);
            });
        });
    }, [contacts]);

    //console.log(contacts);
    const contactItems = [];

    contacts.forEach((data, index) => {
        contactItems.push(<tr>
            <th><img className="rounded-circle" style={{ width: '60px', marginRight: '12px' }} src={avatar2} alt="activity-user" /><span style={{ color: '#2C2C2C' }}>{data["agentName"]}</span></th>
            <th>{data["totalListings"]}</th>
            <th>{data["totalLeads"]}</th>
            <th>{data["conversion"]}</th>
            <th> <i class="feather icon-star mx-1" style={{ color: '#FCB40A' }}></i>{data["rating"]}/5</th>
            <th>
                <OverlayTrigger key={index} overlay={<Tooltip>{'outline-secondary'}</Tooltip>}>
                    <Button variant='outline-secondary' className="text-capitalize">
                        <i class="feather icon-phone-call mx-1" ></i>Contact
                    </Button>
                </OverlayTrigger>
            </th>
        </tr>);
    })

    return (
        <React.Fragment>
            <div class="page-header-title"><h5 class="m-b-20" style={{ color: '#505050', fontSize: '24px' }}>Contact Agents</h5></div>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Col md={4}>
                                <Form.Control type="text" placeholder="Search name" />
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>AGENTS</th>
                                        <th>TOTAL LISTINGS</th>
                                        <th>TOTAL LEADS</th>
                                        <th>CONVERSION</th>
                                        <th>RATING</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contactItems}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ContactAgentPage;
