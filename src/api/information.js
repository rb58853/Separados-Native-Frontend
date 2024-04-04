import { useState, useEffect } from 'react';

export function GetUserInformationById(id) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://192.168.200.251:7400/Users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return user;
}

export function GetAllUsersInformation() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.200.251:7400/Users')
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
