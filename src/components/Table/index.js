import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableWrapper extends Component {
    render() {
        return (
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn style={{ width: '40%' }}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: '10%', textAlign: 'center' }}>ID</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: '25%', textAlign: 'center' }}>Running</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: '25%', textAlign: 'center' }}>Scheduled</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={{ width: '40%' }}>Niel Game</TableRowColumn>
                    <TableRowColumn style={{ width: '10%' }}>1</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ width: '40%' }}>Test</TableRowColumn>
                    <TableRowColumn style={{ width: '10%' }}>1</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ width: '40%' }}>John Smith</TableRowColumn>
                    <TableRowColumn style={{ width: '10%' }}>1</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>0</TableRowColumn>
                  </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default TableWrapper;
