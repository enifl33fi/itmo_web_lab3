const submitButton = document.getElementById('submit')
const validColor = "#66B2FF"
const notValidColor = "#FF6666"
const RegEx = /^-?\d+([.,]\d+)?$/

let isFieldsValid = {
    x:true,
    y:false,
    r:false
}

function commaHandle(field) {
    return field.value.replace(',', '.')
}

function buttonSwitch(disable) {
    if (disable) {
        submitButton.disabled = true;
        submitButton.classList.remove('shown')
        submitButton.classList.add('hidden')
    } else {
        submitButton.disabled = false;
        submitButton.classList.remove('hidden')
        submitButton.classList.add('shown')
    }
}

function isValidY(yFieldVal) {
    if (!RegEx.test(yFieldVal)) {
        return false
    }
    return yFieldVal >= -3 && yFieldVal <= 3
}

function isValidR(rFieldVal) {
    if (!RegEx.test(rFieldVal)) {
        return false
    }
    return rFieldVal >= 1 && rFieldVal <= 4
}

function isValidX(xFieldVal) {
    if (!RegEx.test(xFieldVal)) {
        return false
    }
    return xFieldVal >= -2 && xFieldVal <= 2
}

function validateY() {
    let yField = document.getElementById('y')
    yField.style.borderWidth = '2px'
    if (isValidY(commaHandle(yField))) {
        yField.style.borderColor = validColor
        isFieldsValid.y = true
        if (isFieldsValid.y && isFieldsValid.r && isFieldsValid.x) {
            buttonSwitch(false)
        }
    } else {
        yField.style.borderColor = notValidColor
        buttonSwitch(true)
        isFieldsValid.y = false
    }
}
function validateR() {
    let rField = document.getElementById('r')
    rField.style.borderWidth = '2px'
    if (isValidR(commaHandle(rField))) {
        rField.style.borderColor = validColor
        isFieldsValid.r = true
        if (isFieldsValid.y && isFieldsValid.r && isFieldsValid.x) {
            buttonSwitch(false)
        }
    } else {
        rField.style.borderColor = notValidColor
        buttonSwitch(true)
        isFieldsValid.r = false
    }
}

function validateX() {
    let xField = document.getElementById('x')
    xField.style.borderWidth = '2px'
    if (isValidX(commaHandle(xField))) {
        xField.style.borderColor = validColor
        isFieldsValid.x = true
        if (isFieldsValid.y && isFieldsValid.r && isFieldsValid.x) {
            buttonSwitch(false)
        }
    } else {
        xField.style.borderColor = notValidColor
        buttonSwitch(true)
        isFieldsValid.x = false
    }
}