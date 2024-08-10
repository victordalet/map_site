
import {inject} from 'mobx-react';
import {Component} from 'react';


import Controller from '../controllers/log';
import ViewModel from '../view-model/log';

@inject()
export default class Log extends Component {
    private readonly viewModel: ViewModel;

    constructor(props: any) {
        super(props);

        this.viewModel = new ViewModel();
    }

    render() {

        return <Controller viewModel={this.viewModel}/>;
    }
}