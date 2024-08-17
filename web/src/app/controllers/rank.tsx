import {observer} from "mobx-react";
import {Component} from "react";
import {ControllerProps, ControllerState} from "../types/rank";
import {RankView} from "../view/rank";

@observer
export default class RankController extends Component<
    ControllerProps,
    ControllerState
> {

    render() {
        return <RankView/>
    }


}