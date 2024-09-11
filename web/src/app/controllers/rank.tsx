import {observer} from "mobx-react";
import {Component} from "react";
import {ControllerProps, ControllerState} from "../types/rank";
import {RankView} from "../view/rank";
import {RankModel} from "../model/rank";

@observer
export default class RankController extends Component<
    ControllerProps,
    ControllerState
> {

    model: RankModel = new RankModel();

    constructor(props: ControllerProps) {
        super(props);
        this.model.getRank().then((rank) => {
            this.setState({rank});
        });

    }

    state: ControllerState = {
        rank: []
    };


    render() {
        return <RankView rank={this.state.rank}/>
    }


}