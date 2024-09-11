import ViewModel from '../view-model/map';

export interface ViewProps {
    data: ModelPosition[];
    addPosition: () => void;
}

export interface ControllerProps {
    viewModel: ViewModel;
}

export interface ControllerState {
    data: ModelPosition[];
}


export interface ModelPosition {
    longitude: number;
    latitude: number;
    point: string;
}