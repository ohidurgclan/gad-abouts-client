import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import './NewPost.css';

const NewPost = () => {
  const {user} = useAuth();
  const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      axios.post('https://protected-crag-64613.herokuapp.com/blog', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    alert('New Post Added Successfully');
                    reset();
                }
            });
  };
    return (
        <div className="user-post">
            <h2>Create New Post</h2>
            <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
                <h5>Add Post Title</h5>
                <input type="text" placeholder="Title" {...register("title", { required: true, maxLength: 80 })} />
                <h5>Author Name</h5>
                <select {...register("name")}>
                    <option value={user?.displayName}>{user?.displayName}</option>
                </select>
                <h5>Author Email</h5>
                <select {...register("email")}>
                    <option value={user?.email}>{user?.email}</option>
                </select>
                <h5>Post Category</h5>
                <input type="text" placeholder="Category" {...register("category", { required: true })} />
                <h5>Post Status</h5>
                <select {...register("status", { required: true })}>
                    <option value="Pending">Pending</option>
                </select>
                <h5>Add Rating Based on Experience (Integer Range 1-5)</h5>
                <input type="number" placeholder="Rating" {...register("star", { required: true, max: 5, min: 1, maxLength: 1 })} />
                <h5>Minimum Travel Cost</h5>
                <input type="number" placeholder="Minimum Travel Cost" {...register("cost", { required: true })} />
                <h5>Write Your Experiences</h5>
                <textarea placeholder="Write Your Experiences" {...register("detail", { required: true })} />
                <h5>Travel Location</h5>
                <input type="text" placeholder="Location" {...register("location", { required: true })} />
                <h5>Add Image Link</h5>
                <input type="text" placeholder="Image Link" {...register("img", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default NewPost;