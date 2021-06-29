import logo from './logo.svg';
import './App.css';
import CustomerInfoPage from './CustomerInfoPage';
import ItemsPage from './ItemsPage';
import React from 'react';
import InvoicesPage from './InvoicesPage';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <div id="nav_column">
        <div class="menu_item" onClick={renderCustomersPage}>
          <h2 class="menu_item_title">Customers</h2>
        </div>
        <div class="menu_item" onClick={renderItemsPage}>
          <h2 class="menu_item_title">Items</h2>
        </div>
        <div class="menu_item" onClick={renderInvoicesPage}>
          <h2 class="menu_item_title">Invoices</h2>
        </div>
      </div>
      <div id="content">
        <div id="dynamic_page">
          <CustomerInfoPage/>
        </div>
      </div>
    </div>
  );
}

function renderCustomersPage(){
  ReactDOM.render(
    <CustomerInfoPage/>,
    document.getElementById("dynamic_page")
  );
}

function renderItemsPage(){
  ReactDOM.render(
    <ItemsPage/>,
    document.getElementById("dynamic_page")
  );
}

function renderInvoicesPage(){
  ReactDOM.render(
    <InvoicesPage/>,
    document.getElementById("dynamic_page")
  );
}

export default App;
