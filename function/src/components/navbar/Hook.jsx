import React, { useEffect, useState } from 'react'

 function DataFetchingComponent() {

    const[data,setdata]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const result=await response.json();
                setdata(result);
            } catch (error) {
                console.error("error fetching data:",error);
            }
        }
        fetchData();
        return()=>{
            console.log('component is unmounted.');
        }
    },[]);

  return (
    <div>
      <h2>Fetched data:</h2>
      <ul type="none">
        {data.map(item=>(<li key={item.id}>{item.title}</li>))}
      </ul>
    </div>
  );
}

export default  DataFetchingComponent;
