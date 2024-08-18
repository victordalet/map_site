import ViewModel from '../view-model/log';

export interface ViewProps {
    register: () => void;
    login: () => void;
}

export interface ControllerProps {
    viewModel: ViewModel;
}

export interface ControllerState {}


export interface registerResponse {
    token: string;
}