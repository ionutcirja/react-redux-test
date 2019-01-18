export type Action = {
  +type: string,
  +meta?: {},
  +payload?: {},
};

export type Dispatch = (action: Action) => any;

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
