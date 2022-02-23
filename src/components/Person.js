import React from 'react';

function Person({person}) {
  return <div>I am {person.name} and i have {person.age} and i use {person.skill}</div>;
}

export default Person;
