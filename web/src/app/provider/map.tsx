import {inject} from 'mobx-react';
import {Component} from 'react';


import Controller from '../controllers/map';
import ViewModel from '../view-model/map';

@inject()
export default class Map extends Component {
    private readonly viewModel: ViewModel;

    constructor(props: any) {
        super(props);

        this.viewModel = new ViewModel();
    }

    render() {

        return <Controller viewModel={this.viewModel}/>;
    }
}