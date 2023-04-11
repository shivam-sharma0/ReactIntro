import React from 'react'
import ReactDOM  from 'react-dom';


//Import the cardList
import { cardList } from './cardList';  // but here i have to used same name of the component for importing 

import  SpecificBook  from './book';  // Export default in the export default i can change the name of the function as i want here like i use here book to specific book

// Import Css
// ./fileName (./ it means that file in same folder and if file is in above one folder use two dots )
import "./index.css"

//Stateless functional components always return jsx and only one statement

// let name="Hello How are you"
// function Greeting(){
//   return (
//     <div> 
//     {/* section article react.fragment */}

//       <h2>Hello Worlds</h2>
//       <h2>Hello Worlds  </h2>

//       <div>
//       <h2>{name}  </h2>
//       </div>
     
//       <div>
//       <h1>{name} </h1>
//       </div>
     
//     </div>
//   );
// }

// const Greeting = () =>{
//   return React.createElement('h1',{},"How are you Where are")
// };


//Nested components, React Toolss

// const Msg= () => <h2>Hello Gyus</h2>;
// const Say= () => <h2>How are you </h2>;

// const New=() =>{
//   return (
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat voluptates delectus dolorum aut deserunt reiciendis cum eaque adipisci quae. Ex dolorem mollitia minima modi alias similique itaque commodi laudantium?
// </p>
//   );
// }

// function Greeting(){
//   return (
//     <div>
//     <Msg/>
//     <Say />
//     <New/>
//     </div>
//   );
// }



// Cards  data in the form of array

 
// Example How to render an array in html file through the function 
// const name=["Shivam","Sussain","Peter","John"];
// const newNames=name.map((name)=>{
//   return <h1>{name}</h1>
// })

const card=cardList.map((ele)=>{
  return <SpecificBook key={ele.id} {...ele} />  // ...Ele means that we reterive all the key and there values in one object if i get one key beofore than remain will be come in this object 
})

// List Of Cards
function BookList(){
  return (
    <section className="bookList">
      {card}
    </section>
  );
}



ReactDOM.render(<BookList/>,document.getElementById('root'));