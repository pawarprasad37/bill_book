import React from "react";

class ItemsPageRowItem extends React.Component{
    render(){
        return(
            <tr class="item_info_row">
                <td class="item_info_column" style={{width: '15%'}}>{this.props.name}</td>
                <td class="item_info_column" style={{width: '55%'}}>{this.props.description}</td>
                <td class="item_info_column" style={{width: '15%'}}>{this.props.price}</td>
                <td class="item_info_column" style={{width: '15%'}}>{this.props.added_on}</td>
            </tr>
        );
    }
}

export default ItemsPageRowItem;