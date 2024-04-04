import { useState, useEffect } from 'react';

export function GetAllUsersInformation() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.200.251:7400/Users')
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
                return 0;
            });
    }, []);

    return posts;
}
