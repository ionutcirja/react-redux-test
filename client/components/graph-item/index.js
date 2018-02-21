import React from 'react';
import classnames from 'classnames';
import { Company } from '../../constants/types';
import './index.scss';

type Props = Company & {
  minValuation: number,
  maxValuation: number,
  minIncorporationDate: number,
  maxIncorporationDate: number,
  minRevenue: number,
  maxRevenue: number,
  actions: {
    selectCompany: Function,
    deselectCompany: Function,
  },
};

const VISUAL_REPRESENTATION_MIN_SIZE = 30;
const VISUAL_REPRESENTATION_MAX_SIZE = 100;

const computeSize = ({ valuation, minValuation, maxValuation }) =>
  VISUAL_REPRESENTATION_MIN_SIZE +
  Math.round(((valuation - minValuation) / (maxValuation - minValuation)) * (VISUAL_REPRESENTATION_MAX_SIZE - VISUAL_REPRESENTATION_MIN_SIZE)); // eslint-disable-line max-len

const computeXPosition = ({ incorporationDate, minIncorporationDate, maxIncorporationDate }) =>
  Math.round(((incorporationDate - minIncorporationDate) / (maxIncorporationDate - minIncorporationDate)) * 100); // eslint-disable-line max-len

const computeYPosition = ({ revenue, minRevenue, maxRevenue }) =>
  100 - Math.round(((revenue - minRevenue) / (maxRevenue - minRevenue)) * 100);

const computeStyle = (props) => {
  const {
    valuation,
    minValuation,
    maxValuation,
    incorporationDate,
    minIncorporationDate,
    maxIncorporationDate,
    revenue,
    minRevenue,
    maxRevenue,
  } = props;
  const size = computeSize({ valuation, minValuation, maxValuation });

  return {
    width: size,
    height: size,
    left: `${computeXPosition({ incorporationDate, minIncorporationDate, maxIncorporationDate })}%`,
    top: `${computeYPosition({ revenue, minRevenue, maxRevenue })}%`,
  };
};

const computeClassNames = ({ sector, selected, disabled }) =>
  classnames('graph-item', `graph-item--${sector}`, {
    'graph-item--selected icon-plus': selected,
    'graph-item--disabled': disabled,
  });

const GraphItem = (props: Props) => (
  <li
    className={computeClassNames(props)}
    style={computeStyle(props)}
    onClick={() =>
      !props.disabled &&
      (!props.selected ?
        props.actions.selectCompany({
          id: props.id,
          sector: props.sector,
        }) :
        props.actions.deselectCompany({
          id: props.id,
          sector: props.sector,
        }))
    }
  />
);

export default GraphItem;
