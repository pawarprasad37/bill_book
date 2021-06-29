import React from "react";
import ItemsPageRowItem from "./ItemsPageRowItem";
import ReactDOM from "react-dom";
import NewItemForm from "./NewItemForm";

class ItemsPage extends React.Component{
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
                        <h3 style= {{margin:'0px'}}>Items</h3>
                    </div>
                    <div style={{display: 'inline-block', float: 'right', margin:'10px 5px 5px 10px'}}>
                        <button class='button' type="button" onClick={this.onAddItemClicked}>+ Add Item</button>
                    </div>
                </div>

                <table style={{width:'100%'}}>
                    <tr class="items_header_row">
                        <th class="items_header_column" style={{width:"15%"}}>NAME</th>
                        <th class="items_header_column" style={{width:"55%"}}>DESCRIPTION</th>
                        <th class="items_header_column" style={{width:"15%"}}>PRICE</th>
                        <th class="items_header_column" style={{width:"15%"}}>ADDED ON</th>
                    </tr>
        
                    {
                        this.state.items.map((_item, _index) => (
                            <ItemsPageRowItem name={_item.name} description={_item.description} price={_item.currency + " " + _item.amount} added_on={_item.created_at}/>
                        ))
                    }
                
                </table>
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

    onAddItemClicked(){
        ReactDOM.render(
            <NewItemForm/>,
            document.getElementById("dynamic_page")
        )
    }

    async componentDidMount(){
        const response = await fetch("https://rzp-training.herokuapp.com/team2/items");
        const data = await response.json();
        if (data === null || data === undefined || data.items === null || data.items === undefined){
            return;
        }
        this.setState({
            items: data.items
        });
    }
}

export default ItemsPage;