import * as React from 'react';
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import { Player } from "../../model/Player";

export interface GameSetupPlayerProps {
    index: number;
    player: Player;
    playerCount: number;
    invalidPlayers: Player[];
    changePlayer(index: number, player: Player): void;
    removePlayer(playerIndex: number): void;
    movePlayerUp(playerIndex: number): void;
    movePlayerDown(playerIndex: number): void;
}

export class GameSetupPlayer extends React.Component<GameSetupPlayerProps, {}> {

    render(): JSX.Element {

        const {index, invalidPlayers, player, playerCount } = this.props;

        return <FormGroup controlId={"nameLabel" + index} key={index} validationState={invalidPlayers.indexOf(player) >= 0 ? "error": null}>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="enter name"
                        value={player.name}
                        disabled={player.isUser}
                        onChange={this.updatePlayer}
                    />
                   
                    <Button componentClass={InputGroup.Button} disabled={index == 0} onClick={this.movePlayerUp}>
                        <Glyphicon glyph="chevron-up" />
                    </Button>
                    <Button componentClass={InputGroup.Button} disabled={index == playerCount - 1} onClick={this.movePlayerDown}>
                        <Glyphicon glyph="chevron-down" />
                    </Button>
                    <Button componentClass={InputGroup.Button} disabled={player.isUser} onClick={this.removePlayer} bsStyle="danger">
                        <Glyphicon glyph="remove" />
                    </Button>
                </InputGroup>
            </FormGroup>
    }

    private updatePlayer = (event: any) => {
        this.props.changePlayer(this.props.index, {
            name: event.target.value, 
            isUser: this.props.player.isUser
        });
    }

    private movePlayerUp = () => {
        this.props.movePlayerUp(this.props.index);
    }

    private movePlayerDown = () => {
        this.props.movePlayerDown(this.props.index);
    }

    private removePlayer = () => {
        this.props.removePlayer(this.props.index);
    }
}