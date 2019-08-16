import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';

export type Action = {
  +type: string,
  +meta?: {
    [key: string]: any,
  },
  +payload?: {
    [key: string]: any,
  },
};

export type Company = {
  +id: string,
  +sector: string,
  +valuation: number,
  +revenue: number,
  +incorporationDate: number,
  +selected?: boolean,
  +disabled?: boolean,
};

export type CompaniesList = Array<Company>;

export type State = {
  +companiesList: CompaniesList,
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
