import ViewModel from '../view-model/map';

export interface ViewProps {
    data: string[];
    addPosition: () => void;
}

export interface ControllerProps {
    viewModel: ViewModel;
}

export interface ControllerState {
    data: string[];
}


export interface ModelPosition {
    longitude: number;
    latitude: number;
    point: string;
}