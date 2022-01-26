import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import "./AllPosts.css";

const AllPosts = () => {
  const [booking, setBooking] = useState([]);

  const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" };
    const url = `https://protected-crag-64613.herokuapp.com/blog/${id}`;
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
          fetch(`https://protected-crag-64613.herokuapp.com/blog`)
            .then((res) => res.json())
            .then((data) => {
              setBooking(data.items);
            });
        }
      });
  };

  // Delete Booking API
  const handleDelete = (id) => {
    const url = `https://protected-crag-64613.herokuapp.com/blog/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Post Deleted");
          const deleteItem = booking.filter((book) => book._id !== id);
          setBooking(deleteItem);
        }
      });
  };

  // load data useEffect
  useEffect(() => {
    fetch(`https://protected-crag-64613.herokuapp.com/blog`)
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
            <h2>All Posts</h2>
            <Table bordered className="booking-table">
              <thead>
                <tr>
                  <th>Author Name</th>
                  <th>Post Title</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Update Status</th>
                  <th>Cancel Booking</th>
                </tr>
              </thead>
              {booking?.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.title}</td>
                    <td>{order.location}</td>
                    <td>{order.status}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="appointment-btn"
                      >
                        Approve
                      </button>
                    </td>
                    <td>
                      <button
                        className="appointment-btn"
                        onClick={() => handleDelete(order._id)}
                      >
                        Cancel
                      </button>
                    </td>
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

export default AllPosts;
