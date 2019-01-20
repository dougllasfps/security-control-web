import React from 'react'
import {Table} from 'reactstrap'

export default class DataTable extends React.Component{
    render(){
        return(
            <Table bordered hover className="dataTable">
                <thead>
                    <tr>
                        <th>Coluna1</th>
                        <th>Coluna2</th>
                        <th>Coluna2</th>
                        <th>Coluna2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td>Teste</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
