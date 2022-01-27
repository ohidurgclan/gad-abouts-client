import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from "react-bootstrap";
import useAuth from '../../../../hooks/useAuth';

const MyPosts = () => {
  const { user } = useAuth();
  const [myPost, setMyPost] = useState([]);

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
          const deleteItem = myPost.filter((book) => book._id !== id);
          setMyPost(deleteItem);
        }
      });
  };

  // load data useEffect
  useEffect(() => {
    fetch(`https://protected-crag-64613.herokuapp.com/blog/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPost(data);
      });
  }, [myPost]);

  return (
    <>
      <div className="mt-5rem">
        <Container>
          <Row>
            <h2>My Posts</h2>
            <Table bordered className="booking-table">
              <thead>
                <tr>
                  <th>Author Name</th>
                  <th>Post Title</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Delete Post</th>
                </tr>
              </thead>
              {myPost?.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.title}</td>
                    <td>{order.location}</td>
                    <td>{order.status}</td>
                    <td>
                      <button
                        className="appointment-btn"
                        onClick={() => handleDelete(order._id)}
                      >
                        Delete
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

export default MyPosts;