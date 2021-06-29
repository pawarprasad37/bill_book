import React from "react";
import CustomerInfoItem from "./CustomerInfoItem";
import ReactDOM from "react-dom";
import NewCustomerForm from "./NewCustomerForm";

class CustomerInfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    render(){
        const hasData = this.state.items && this.state.items.length > 0;
        let ui;
        if (hasData) {
            ui = (
                <div>
                    <div id="title" style={{display: 'block'}}>
                    <div style={{display: 'inline-block', margin:'10px 5px 5px 10px'}}>
                        <h3 style= {{margin:'0px'}}>Customers</h3>
                    </div>
                    <div style={{display: 'inline-block', float: 'right', margin:'10px 5px 5px 10px'}}>
                        <button class='button' type="button" onClick={this.onNewCustomerClicked}>+ New Customer</button>
                    </div>
                </div>

                <div>
                    <table style={{width:'100%'}}>
                        <tr class="customer_info_header_row">
                            <th class="customer_info_header_column" style={{width:'25%'}}>NAME</th>
                            <th class="customer_info_header_column" style={{width:'25%'}}>PHONE</th>
                            <th class="customer_info_header_column" style={{width:'25%'}}>EMAIL</th>
                            <th class="customer_info_header_column" style={{width:'25%'}}>CREATED ON</th>
                        </tr>

                        {
                            this.state.items.map((_item, _index) => (
                                <CustomerInfoItem name= { _item.name } phone= { _item.contact } email= { _item.email } created_on= { _item.created_at }/>
                            ))
                        }
                    </table>
                </div>
                </div>
            );
        } else {
            ui = (
                <div id="loader" style={{height:"100vh", display:"flex" , alignItems:"center",justifyContent:"center"}}>
                    <img src="https://i.gifer.com/YCZH.gif" alt="loader"/>
                </div>
            );
        }

        return(
            <div>
                {ui}   
            </div>
        );
    }

    async componentDidMount(){
        const response = await fetch("https://rzp-training.herokuapp.com/team2/customers");
        const data = await response.json();
        if (data === null || data === undefined || data.items === null || data.items === undefined){
            return;
        }
        this.setState({
            items: data.items
        });
    }

    onNewCustomerClicked(){
        ReactDOM.render(
            <NewCustomerForm/>,
            document.getElementById("dynamic_page")
        )
    }
}

export default CustomerInfoPage;