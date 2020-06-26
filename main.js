let bodyElement = document.querySelector('body')
let divElement = document.querySelector('div')
let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.floor(Math.random() * 2);
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
        "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "| Heads |"
        } else {
            return "| Tails |"
        }
    },
    toHTML: function () {
        /* 3. Set the properties of this image element to show either face-up
        or face-down, depending on whether this.state is 0 or 1.*/
        let image = document.createElement('img');
        image.style.width = '5%'
        image.style.height = '5%'
        if (this.state === 0) {
            image.src = './images/heads.jpg'
        } else {
            image.src = './images/tails.jpg'
        }
        return image;
    }
};

function display20Flips() {
    for (let index = 0; index < 20; index += 1) {
        let resultsString = coin.toString()
        coin.flip()
        bodyElement.append(resultsString);
    }
}

function display20Images() {
    for (let index = 0; index < 20; index += 1) {
        let resultsImg = coin.toHTML()
        coin.flip()
        bodyElement.append(resultsImg)
    }
}

display20Flips()
display20Images()
