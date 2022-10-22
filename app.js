//npm-global command , comes with node
//npm --version


//local dependency -use it in particular project
//npm i <packageName>

//global dependency -use it in any project
//npm install -g <pacakageName>
//sudo install -g <packageName> (mac) 

//package.json-manifest file(stores important info about project/package)
//manual approach (create package .json in the root ,create properties etc)
//npm init (step by step,press enter to skip)
//npm init -y(everything default)


const _=require('lodash')

const arry=[1,[2,[3,[4]]]];

const item=_.flattenDeep(arry)

console.log(item)
