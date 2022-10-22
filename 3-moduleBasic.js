    //commonJS, every file is module
    //Modules --Encapsulated Code (only share minimum)

    //const {john,peter}=require('./4-names')
    const names =require('./4-names');
    const sayHi=require('./5-utils')
    const data=require('./6-alternativeFlavor')
    require('./7-mind-grenade')

    // console.log(names)
    // console.log(sayHi)


    // sayHi('susan')
    // sayHi(names.john)
    // sayHi(names.peter)
    // console.log(sayHi)
    // console.log(data.singlePerson)
    // console.log(data.items)