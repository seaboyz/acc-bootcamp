Consider the following code.  What would be console logged?  Messed up?  Why? (20%)

What would you change to address this issue (where the Apple type is, mis-represented in the last line below)? (80%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


Hint: this question refers to copying of objects.