import axios from 'axios'
import React, {useState, useEffect } from 'react'
import './App.css'

import Table from './TableComponents/Table'

const App = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
  ]
  return (
    <div>
      <div className='App'>
        <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column}/>
      </div>
    </div>
  )
}

export default App
