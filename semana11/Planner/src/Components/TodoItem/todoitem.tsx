import React from 'react';
import { TaskBox } from './todoitem_styles';
import { useState } from 'react';
import { deleteTask } from './todoitem_services';
import { TodoItemProps } from '../../Types/interfaces';

const TodoItem = ({ text, id }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <TaskBox>
      {text}

      {editMode ? (
        <>
          <input placeholder="Insira o novo conteúdo" type="text" />
          <button>Concluir</button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={() => deleteTask(id)}>Deletar</button>
        </>
      )}
    </TaskBox>
  );
};

export default TodoItem;
