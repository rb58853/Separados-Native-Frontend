import users from "../data/users";
import env from "../environment/environment";

const profile = users[env['profile']]

export function PostSuperLike(user) {
    //Aqui hay que hacer un post a la api del backend.....
    if ('superLikesFrom' in user) {
        if (!(profile.nick in user['superLikesFrom']))
            user['superLikesFrom'].push(profile.nick)
        else
            return 0 // Esto debe mandar algo pal front al ser cero
    }
    else
        user['superLikesFrom'] = [profile.nick]

    return 1 // Esto deberia saberse desde el backend con response y enviar si se hizo bien el post
}

export function PostDeleteSuperLike(user) {
    //Aqui hay que hacer un post a la api del backend.....
    if ('superLikesFrom' in user) {
        if (profile.nick in user['superLikesFrom'])
            user['superLikesFrom'].remove(profile.nick)
        else
            return 0 // Esto debe mandar algo pal front al ser cero
    }
    else
        return 0 // Esto debe mandar algo pal front al ser cero

    return 1 // Esto deberia saberse desde el backend con response y enviar si se hizo bien el post
}

export function GetSuperLikesTo() {
    //Aqui hay que hacer un get a la api del backend.....
}

export function GetSuperLikesFrom() {
    //Aqui hay que hacer un get a la api del backend.....
    if ('superLikesFrom' in profile)
        return profile.superLikesFrom
}