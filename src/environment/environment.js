// class env {
//     mode= 'dark';
//     profile =  'clara';
//     usersImagesRoot = 'http://192.168.200.251:8080/users/';
// }
const env = {
    mode: 'dark',
    profile: 'clara',
    usersImagesRoot: 'http://192.168.200.251:8080/users/',
}

export const mode = env['mode']
export const usersImagesRoot = env['usersImagesRoot']

export const bottomBarHeight = 50
export default env