import users from "../data/users";
import env from "../environment/environment";

const profile = users[env['profile']]

export function PostLike(user) {
    //Aqui hay que hacer un post a la api del backend.....
    if ('likesFrom' in user) {
        if (!(profile.nick in user['likesFrom']))
            user['likesFrom'].push(profile.nick)
        else
            return 0 // Esto debe mandar algo pal front al ser cero
    }
    else
        user['likesFrom'] = [profile.nick]

    return 1 // Esto deberia saberse desde el backend con response y enviar si se hizo bien el post
}

export function PostDeleteLike(user) {
    //Aqui hay que hacer un post a la api del backend.....
    if ('likesFrom' in user) {
        if (profile.nick in user['likesFrom'])
            user['likesFrom'].remove(profile.nick)
        else
            return 0 // Esto debe mandar algo pal front al ser cero
    }
    else
        return 0 // Esto debe mandar algo pal front al ser cero

    return 1 // Esto deberia saberse desde el backend con response y enviar si se hizo bien el post
}

export function GetLikesTo() {
    //Aqui hay que hacer un get a la api del backend.....
}

export function GetLikesFrom() {
    //Aqui hay que hacer un get a la api del backend.....
    if ('likesFrom' in profile)
        return profile.likesFrom
}