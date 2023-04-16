var number = 0

const update = _ => document.getElementById('NumberDisplay').innerHTML = number

const changeValue = (action) => {
    switch (action.value.toLowerCase()) {
        case "increase":
            number += 1;
            break;
        case "decrease":
            number -= 1;
            break;
        case "reset":
            number = 0;
            break;
    };
    update();
}