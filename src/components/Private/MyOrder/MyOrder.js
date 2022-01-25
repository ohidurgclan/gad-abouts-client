import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { users } = useAuth();
    const [order, setOrder] = useState([]);

    const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" };
    const url = `https://howling-citadel-94409.herokuapp.com/userpackage/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Update Succeflly");
          fetch(
            `https://howling-citadel-94409.herokuapp.com/userpackage/${users?.email}`
          )
            .then((res) => res.json())
            .then((data) => {
              setOrder(data);
              console.log(data);
            });
        }
      });
  };

  const handleDelete = (id) => {
    const url = `https://howling-citadel-94409.herokuapp.com/userpackage/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("delete Succeflly");
          const remainItem = order.filter(book => book._id !== id);
          setOrder(remainItem);
        }
      });
  };

  useEffect(() => {
      fetch(`https://howling-citadel-94409.herokuapp.com/userpackage/${users?.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
  }, [users]);
    
    return (
        <>
          <div className="mt-5rem">
          <Container>
            <Row>
              <h2>My Booking Packages</h2>
              <Table bordered className="booking-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Package Name</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Update Status</th>
                    <th>Cancel Booking</th>
                  </tr>
                </thead>
                {order.map(myorder => (
                  <tbody key={myorder._id}>
                    <tr>
                      <td>{myorder.Name}</td>
                      <td>{myorder.orderName}</td>
                      <td>{myorder.Mobile}</td>
                      <td>{myorder.status}</td>
                      <td><button onClick={() => handleUpdate(myorder._id)} className="appointment-btn">Approve</button></td>
                      <td><button className="appointment-btn" onClick={() => handleDelete(myorder._id)}>Cancel</button></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Row>
          </Container>
          </div>
        </>
    );
};

export default MyOrder;