import React from 'react';
import { Props } from './interface';

import { Container } from './styles';

const Flat: React.FC<Props> = ({ label, small = false }: Props) => {
  return <Container small={small}>{label}</Container>;
};

export default Flat;
