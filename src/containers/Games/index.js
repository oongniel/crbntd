import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addGame } from './actions';
import { gamesGetAll } from '../../services';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import AddButton from 'material-ui/svg-icons/content/add';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Games extends Component {
    getAllGames() {
        const component = this;
        gamesGetAll((resp) => {
            component.props.addGame(resp.data.games)
            // console.log(resp)
        })
    }
    componentDidMount() {
        this.getAllGames();
    };
    render() {
        // console.log(this.props.gameList)
        const { gameList } = this.props.gameList;
        console.log(gameList.gameList)
        return (
            <Card>
                <CardHeader
                    title="Games"
                    subtitle="List of Available Games"
                    titleStyle={{ fontSize: '2em'}}
                >
                    <IconMenu
                        style={{ position: 'absolute', right: '0', top: '0' }}
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Delete Game" />
                    </IconMenu>
                </CardHeader>
                <CardText >
                    <RaisedButton
                        style={{margin: '12px'}}
                        label="Add Game"
                        secondary={true}
                        icon={<AddButton />}
                    />
                    <Table>
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
                    </Table>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameList: state.gameReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { addGame },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
