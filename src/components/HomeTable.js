import React from "react";
import { Card, Row, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function HomeTable() {
  return (
    <div className="container mt-3">
      <Row>
        <div className="col">
          <Card className="shadow">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employees Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th>Profile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <th className="text-center">
                    <span style={{padding:'5px',margin:'0px'}} className="btn btn-success">Active</span>
                  </th>
                  <th className="text-center">
                    <img
                      src="https://avatarfiles.alphacoders.com/276/thumb-1920-276208.jpg"
                      alt=""
                      width={"50px"}
                      height={"50px"}
                      style={{borderRadius:'25px'}}
                    />
                  </th>
                  <th className="text-center">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        style={{padding:'10px',margin:'0px'}}
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to={"/view/2"} style={{textDecoration:'none'}}>View</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={"/edit/2"} style={{textDecoration:'none'}}>Edit</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default HomeTable;
