import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('https://howling-citadel-94409.herokuapp.com/package')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return [blogs];
};
export default useBlogs;