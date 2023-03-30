import Accordion from "./FunctionalAccordion"
import React from 'react'
import { useState, useEffect } from 'react'

function FunctionalApp() {

    const URL = 'https://countriesnow.space/api/v0.1/countries/capital'
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(URL) 
        .then(result => result.json())
        .then(data => setData(data.data))
       
      },[])
      return (
        <div>
        {
            data?.map((item, index) => {
              return (
                <Accordion key={index} props={item}/>
              )
            })
          }
        </div>
        
      )
}
export default FunctionalApp;