const title = React.createElement(
//create element accepts 3 arguments that defines the elements
// we want to create,ususally a string a html element or tag
'h1',
{id:'main-title', title:'This is the title'},
'My First React Element!'

);
console.log(title);


// we learned that react does not create real dom nodes.by dom nodes
// i mean h1,div etc. instead react creates plain js objects that describes
// dom nodes. how does this object representation of the dom node
//get rendered and displayed on page ???  

// react dom library included in the proj provides DOM Specific methods
// we will use reactDOM.render () the most , which renders react elements
// to the dom.


const desc = React.createElement(
'p',
null,
'creating a react node and rendering into DOM'

);
const header= React.createElement(
'header',
null,
title,
desc
);

ReactDOM.render(
// this is the function that actually does the creating and updating
// of the DOM .
// render accepts two elements 
header,
document.getElementById('root')

//getElementById('root'); is the container element where our code will be
//rendered by react
);