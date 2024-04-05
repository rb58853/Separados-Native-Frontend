import { useState, useEffect, useLayoutEffect } from 'react';
import { setUsers } from '../store/users/usersSlice';
import { useFocusEffect } from '@react-navigation/native';

export function GetUserInformationById(id) {
    const [user, setUser] = useState([]);

    useLayoutEffect(() => {
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

export function GetAllUsersInformation(store = false) {
    const [posts, setPosts] = useState([]);

    useLayoutEffect(() => {
        fetch('http://192.168.200.251:7400/Users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                if (store)
                    setUsers(data)
            })
            .catch((err) => {
                console.log(err.message);
                return 0;
            });
    }, []);

    return posts;
}

export function GetAllUsersInformationOnFocus(store = false) {
    const [posts, setPosts] = useState([]);

    useFocusEffect(() => {
        fetch('http://192.168.200.251:7400/Users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                if (store)
                    setUsers(data)
            })
            .catch((err) => {
                console.log(err.message);
                return 0;
            });
    }, []);

    return posts;
}