function validateForm(input) {
    const error = {}

    const Expresionletter = new RegExp('^[A-Z]+$', 'i');
    const ExpresionNumber = new RegExp ('^[0-9]+$', 'i');
   //const ExpresionUrl = new RegExp(/^(ftp|http|https):[^ "]+$/);
   
   //NAME
    if (!input.name) { error.name = 'Name is required' }
    else if (input.name.length < 3 || input.name.length > 20) { error.name = 'Only 3 and 20 characters' }
    else if (!Expresionletter.test(input.name)) {
        error.name = 'Only letters'
    }

    //image
//funciona pero la desactivo por si no poenen foto 

    // if (!ExpresionUrl.test(input.image)) {
    //     error.image = 'Only valid Url'
    // }

    //hp

    if (!input.hp) {
        error.hp = 'Hp is required'
    } else if (input.hp < 1 || input.hp > 99) {
        error.hp = 'Only values between 1 and 99'
    } else if (!ExpresionNumber.test(input.hp)) {
        error.hp = 'The value must be just a number.'
    }



    //attack
    if (!input.attack) {
        error.attack = 'Attack is required'
    } else if (input.attack < 1 || input.attack > 150) {
        error.attack = 'Only values between 1 and 150'
    }else if (!ExpresionNumber.test(input.attack)) {
        error.attack = 'The value must be just a number.'
    }


    //defense
    if (!input.defense) {
        error.defense = 'Defense is required'
    } else if (input.defense < 1 || input.defense > 150) {
        error.defense = 'Only values between 1 and 150'
    }else if (!ExpresionNumber.test(input.defense)) {
        error.defense = 'The value must be just a number.'
    }

    //speed
    if (!input.speed) {
        error.speed = 'Speed is required'
    } else if (input.speed < 1 || input.speed > 70) {
        error.speed = 'Only values between 1 and 70'
    }else if (!ExpresionNumber.test(input.speed)) {
        error.speed = 'The value must be just a number.'
    }



    //height

    if (!input.height) {
        error.height = 'Height is required'
    } else if (input.height < 1 || input.height > 180) {
        error.height = 'Only values between 1 and 180'
    }else if (!ExpresionNumber.test(input.height)) {
        error.height = 'The value must be just a number.'
    }

    //Weight

    if (!input.weight) {
        error.weight = 'Weight is required'
    } else if (input.weight < 1 || input.weight > 200) {
        error.weight = 'Only values between 1 and 200'
    }else if (!ExpresionNumber.test(input.weight)) {
        error.weight = 'The value must be just a number.'
    }


    //Types

    if (input.types.length<1) {
        error.types = 'Minimum 2 types'
    } else if (input.types.length > 2) {
        error.types = 'Maximum 3 types'
    }


    return error
}

export default validateForm