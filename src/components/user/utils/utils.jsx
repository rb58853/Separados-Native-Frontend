export function SwitchImage(x, deltaX, setIndexImage, indexImage, imagesLenght) {
    if (x > deltaX && indexImage < imagesLenght - 1) {
        setIndexImage(indexImage + 1)
    }
    if (x < deltaX && indexImage>0) {
        setIndexImage(indexImage - 1)
    }
}

export function AgeCaculate(user) {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [bornDay, bornMonth, bornYear] = user.date_born.split('/')

    let age = parseInt(year, 10) - parseInt(bornYear, 10)

    if (bornMonth > month) {
        age -= 1
    }
    if (bornMonth == month && bornDay > day) {
        age -= 1
    }
    return age
}