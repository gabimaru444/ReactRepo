import React, { useState } from 'react'

export default function Context() {
   
   
      
      const [items,setitems] = useState([
        {
          id :3,
          checked : false,
          item : "item 1"
        },
        {
          id :2,
          checked : false,
          item : "item 2"
        },
        {
          id :3,
          checked : false,
          item : "item 3"
        },
      ])
    const hh = () => {
return items.map(( item  => { console.log(item)
    <li>
      <input type='checkbox' checked = {items.checked}></input>
    </li>
  }))}

  return <> {hh()} </> 
   
      
  
}