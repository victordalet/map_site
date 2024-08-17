import {inject} from 'mobx-react';
import {Component} from 'react';


import Controller from '../controllers/rank';
import ViewModel from '../view-model/rank';

@inject()
export default class Rank extends Component {
    private readonly viewModel: ViewModel;

    constructor(props: any) {
        super(props);

        this.viewModel = new ViewModel();
    }

    render() {

        return <Controller viewModel={this.viewModel}/>;
    }
}