import React from 'react';
import { Row, Col, Card, Table, OverlayTrigger, Button, Tooltip, Form, FormControl } from 'react-bootstrap';
import { API_DATA_SERVER } from './../../config/constant';
import avatar2 from './../../assets/images/user/avatar-2.jpg';

const LeadPage = () => {
    const [leads, setLeads] = React.useState([]);

    React.useEffect(() => {
        fetch('https://iceberg-srv.linh.work/Insight/QueryLead', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin",
            cache: "force-cache"
        }).then((response) => {
            response.json().then((data) => {
                setLeads(data.data);
            });
        });
    }, [leads]);

    //console.log(leads);
    const leadItems = [];

    let handleChange = function (event) {
        var txtFilter = event.target.value.toLowerCase();
        if (txtFilter != '') {
            leads = leads.filter(x => x.consumerName == txtFilter);
        }
    }

    leads.forEach((data, index) => {
        leadItems.push(<tr>
            <th><img className="rounded-circle" style={{ width: '60px', marginRight: '12px' }} src={avatar2} alt="activity-user" /><span style={{ color: '#2C2C2C' }}>{data["consumerName"]}</span></th>
            <th>{data["phone"]}</th>
            <th>{data["email"]}</th>
            <th>{data["contactedDate"]}</th>
            <th>{data["qualityScore"]}</th>
            <th><span style={{ background: '#F2F2F2', borderRadius: '8px', marginRight: '8px', marginBottom: '8px', padding: '4px', color: '#2C2C2C' }}>{data["status"]}</span>
            </th>
        </tr>);
    })

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} className="mb-2 mr-5">
                                                <Form.Control type="text" onChange={handleChange} placeholder="Search name, phone number or email" />
                                            </Form.Group>
                                            <Form.Group as={Col} >
                                                <OverlayTrigger overlay={<Tooltip>{'outline-secondary'}</Tooltip>}>
                                                    <Button variant='outline-secondary' className="text-capitalize">
                                                        <i class="feather icon-arrow-up mx-1" ></i><span style={{ color: '#2C2C2C' }}>Export data</span>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger overlay={<Tooltip>{'outline-secondary'}</Tooltip>}>
                                                    <Button variant='outline-secondary' className="text-capitalize">
                                                        <i class="feather icon-arrow-down mx-1" ></i><span style={{ color: '#2C2C2C' }}>Import data</span>
                                                    </Button>
                                                </OverlayTrigger>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Col>
                            </Row>

                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>CONSUMER</th>
                                        <th>PHONE NUMBER</th>
                                        <th>EMAIL</th>
                                        <th>CONTACTED DATE</th>
                                        <th>LEAD QUALITY</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leadItems}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default LeadPage;
