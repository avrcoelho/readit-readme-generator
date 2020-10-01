import React from 'react';

import { Container, ButtonAdd, ButtonDelete } from './styles';

import { Props } from './interface';

const Item: React.FC<Props> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}: Props) => {
  return (
    <Container isCompleted={todo.isCompleted}>
      {todo.text}
      <div>
        <ButtonAdd onClick={() => completeTodo(index)}>
          {todo.isCompleted ? (
            <img src={require('../../../assets/imgs/check.png')} />
          ) : (
            <img src={require('../../../assets/imgs/unchecked.png')} />
          )}
        </ButtonAdd>
        <ButtonDelete onClick={() => removeTodo(index)}>
          <img src={require('../../../assets/imgs/delete.png')} />
        </ButtonDelete>
      </div>
    </Container>
  );
};

export default Item;
