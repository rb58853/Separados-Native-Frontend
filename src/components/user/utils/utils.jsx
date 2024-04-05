import users from '../../../data/users.js';
import dynamicUsers from '../../../data/usersRealTime.js';
import env from '../../../environment/environment.js';

export function SwitchImage(x, deltaX, setIndexImage, indexImage, imagesLenght) {
    if (x > deltaX && indexImage < imagesLenght - 1) {
        setIndexImage(indexImage + 1)
    }
    if (x < deltaX && indexImage > 0) {
        setIndexImage(indexImage - 1)
    }
}

export function AgeCaculate(user) {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [bornDay, bornMonth, bornYear] = user.dateBorn.split('/')

    let age = parseInt(year, 10) - parseInt(bornYear, 10)

    if (bornMonth > month) {
        age -= 1
    }
    if (bornMonth == month && bornDay > day) {
        age -= 1
    }
    return age
}

export function CalculateDistance(user) {
    const userPos = dynamicUsers[user.id].position;
    const mePos = dynamicUsers[env.profile].position;
    const x = userPos[0] - mePos[0]
    const y = userPos[1] - mePos[1]
    return (Math.sqrt(x * x + y * y) / 1000).toFixed(1)
    // return 10
}