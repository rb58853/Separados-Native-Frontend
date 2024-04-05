export class User {
    constructor(userJson) {
        Object.keys(userJson).forEach((key) => {
            this[key] = userJson[key]
        })
    }
}