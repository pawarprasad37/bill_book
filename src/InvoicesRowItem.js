import React from "react";

class InvoicesRowItem extends React.Component{
    render(){
        return(
            <tr class="invoices_info_row">
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.date}</td>
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.customer}</td>
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.number}</td>
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.paid_status}</td>
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.amount}</td>
                <td class="invoices_info_column" style={{width: '16.66%'}}>{this.props.amount_due}</td>
            </tr>
        );
    }
}

export default InvoicesRowItem;