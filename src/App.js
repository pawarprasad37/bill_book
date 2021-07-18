import './App.css'
import CustomerInfoPage from './CustomerInfoPage'
import ItemsPage from './ItemsPage'
import React from 'react'
import InvoicesPage from './InvoicesPage'
import NavigationDrawer from './NavigationDrawer'
import { useState, useEffect } from 'react'
import NewCustomerForm from './NewCustomerForm'
import NewItemForm from './NewItemForm'
import NewInvoicePage from './NewInvoicePage'

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('customers')

  useEffect(() => {}, [selectedMenuItem])

  let dynamicPage = (
    <CustomerInfoPage setSelectedMenuItem={setSelectedMenuItem} />
  )
  if (selectedMenuItem === 'items') {
    dynamicPage = <ItemsPage setSelectedMenuItem={setSelectedMenuItem} />
  } else if (selectedMenuItem === 'invoices') {
    dynamicPage = <InvoicesPage setSelectedMenuItem={setSelectedMenuItem} />
  } else if (selectedMenuItem === 'newCustomerForm') {
    dynamicPage = <NewCustomerForm setSelectedMenuItem={setSelectedMenuItem} />
  } else if (selectedMenuItem === 'addItemForm') {
    dynamicPage = <NewItemForm setSelectedMenuItem={setSelectedMenuItem} />
  } else if (selectedMenuItem === 'newInvoicePage') {
    dynamicPage = <NewInvoicePage setSelectedMenuItem={setSelectedMenuItem} />
  }

  return (
    <div className="App">
      <NavigationDrawer
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
      />

      <div id="content">
        <div id="dynamic_page">{dynamicPage}</div>
      </div>
    </div>
  )
}

export default App
