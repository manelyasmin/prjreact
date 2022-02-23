import React from 'react';
import Person from './Person';
function NameList() {

    const person=[
        {
            id:1,
            name:"manel",
            age:25,
            skill:"react"
        },
        {   id:2,
            name:"yasmine",
            age:24,
            skill:"angular"
        },
        {   id:3,
            name:"souh",
            age:27,
            skill:"nextjs"
        }
    ]
const personList=person.map(person => <Person key={person.id} person={person}/>)


  return (
  <div>{personList}</div>
  );
}

export default NameList;
