import React, { Component } from 'react';
import { addGame } from './actions';
import { gamesGetAll } from '../../services';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AddButton from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AddGame from './AddGame';

class Games extends React.Component {

    state = {
        modalOpen: false
    }

    _getAllGames = () => {
        const component = this;
        gamesGetAll((resp) => {
            component.props.addGame(resp.data.games);
        });
    }

    _handleModalClose = () => {
        this.setState({ modalOpen: false });
    }

    _handleModalOpen = () => {
        const { modalOpen } = this.state;
        this.setState({ modalOpen: !modalOpen });
    }

    __handleFormSubmit= () => {
        alert();
    }

    componentDidMount() {
        this._getAllGames();
    };

    render() {
        const { gameList } = this.props.gameList;
        const { modalOpen } = this.state;
        return (
            <Card>
                <CardHeader
                    title="Games"
                    subtitle="List of Available Games"
                    titleStyle={{ fontSize: '2em'}}
                />
                <CardText >
                    <RaisedButton
                        label="Add Game"
                        secondary={true}
                        icon={<AddButton />}
                        onClick={this._handleModalOpen.bind(this)}
                    />
                    {!gameList.length && 
                        <div>
                            <span>Loading games </span>
                            <CircularProgress />
                        </div>}
                    {gameList.length && <Table>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn style={{ width: '25%' }}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '25%', textAlign: 'center' }}>ID</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '25%', textAlign: 'center' }}>Running</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '25%', textAlign: 'center' }}>Scheduled</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {gameList.length && gameList.map((val,index) => {
                                return (
                                <TableRow key={val.id}>
                                    <TableRowColumn style={{ width: '25%' }}>{val.carbGameId}</TableRowColumn>
                                    <TableRowColumn style={{ width: '25%' }}>{val.id}</TableRowColumn>
                                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>{val.runningEvents}</TableRowColumn>
                                    <TableRowColumn style={{ width: '25%', textAlign: 'center' }}>{val.scheduledEvents}</TableRowColumn>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>}
                </CardText>
                <AddGame
                    handleSubmit={this._handleFormSubmit}
                    handleClose={this._handleModalClose}
                    open={modalOpen}
                />
            </Card>
        );
    }
}

export default Games;
