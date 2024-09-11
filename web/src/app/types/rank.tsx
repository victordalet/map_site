import ViewModel from '../view-model/rank';

export interface ViewProps {
    rank: string[];
}

export interface ControllerProps {
    viewModel: ViewModel;
}

export interface ControllerState {
    rank: string[];
}

