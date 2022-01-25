import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './AllBooking.css';

const AllBooking = () => {
  const [booking, setBooking] = useState([]);

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
        if (data.modifiedCount) {
          alert("Updated Succefully");
          fetch(`https://howling-citadel-94409.herokuapp.com/userpackage`)
            .then((res) => res.json())
            .then((data) => {
              setBooking(data);
            });
        }
      });
  };

  // Delete Booking API
  const handleDelete = (id) => {
    const url = `https://howling-citadel-94409.herokuapp.com/userpackage/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Booking Item Deleted");
          const deleteItem = booking.filter(book => book._id !== id);
          setBooking(deleteItem);
        }
      });
  };

  // load data useEffect
    useEffect(() => {
    fetch(`https://howling-citadel-94409.herokuapp.com/userpackage`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
        <>
          <div className="mt-5rem">
          <Container>
            <Row>
              <h2>Package Booking Status</h2>
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
                {booking.map(order => (
                  <tbody key={order._id}>
                    <tr>
                      <td>{order.Name}</td>
                      <td>{order.orderName}</td>
                      <td>{order.Mobile}</td>
                      <td>{order.status}</td>
                      <td><button onClick={() => handleUpdate(order._id)} className="appointment-btn">Approve</button></td>
                      <td><button className="appointment-btn" onClick={() => handleDelete(order._id)}>Cancel</button></td>
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

export default AllBooking;