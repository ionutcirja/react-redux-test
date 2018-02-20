export type Action = {
  +type: string,
  +meta?: {},
  +payload?: {},
};

export type Company = {
  +id: string,
  +sector: string,
  +code: string,
  +name: string,
  +price: number,
  +image: string,
  +selected?: boolean,
  +disabled?: boolean,
};

export type State = {
  +sectors: Array<string>,
  +graph: Array<Company>,
};
