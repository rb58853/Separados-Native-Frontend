const initialUser = {
    'country': '',
    'name': '',
    'last_name': '',
    'email': '',
    'city': '',
    'address': '',
    'apartament_number': '',
    'province': '',
    'postal_code': '',
};
export function FullUser() {
    let user_ = localStorage.getItem("user")
    let user = user_ ? JSON.parse(user_) : initialUser
    return Object.values(user).map(item => { return item })
}

export function User(key) {
    let user_ = localStorage.getItem("user")
    let user = user_ ? JSON.parse(user_) : initialUser
    return user[key]
}

export function SetPersistentDataFromKey(value, key) {
    let user_ = localStorage.getItem("user")
    let user = user_ ? JSON.parse(user_) : initialUser

    if (user)
        user[key] = value;

    localStorage.setItem('user', JSON.stringify(user))
}
