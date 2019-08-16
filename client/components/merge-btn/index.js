// @flow
import React from 'react';
import './index.scss';

type Props = {
  isBtnEnabled: boolean,
  actions: {
    mergeSelectedCompanies: Function,
  },
};

const MergeBtn = (props: Props) => (
  <button
    className="button button--merge"
    disabled={!props.isBtnEnabled}
    onClick={() =>
      props.isBtnEnabled &&
      props.actions.mergeSelectedCompanies()
    }
  >
    Merge 2 companies
  </button>
);

export default MergeBtn;
