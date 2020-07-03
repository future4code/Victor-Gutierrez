import React from 'react';
import { TaskBox } from './todoitem_styles';
import { useState } from 'react';
import { deleteTask } from './todoitem_services';
import { TodoItemProps } from '../../Types';

const TodoItem = ({ text, id }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const closeEditMode = (event: React.KeyboardEvent) => {
    if (Number(event.keyCode) === 27) {
      setEditMode(false);
    }
  };

  return (
    <TaskBox onKeyDown={(e) => closeEditMode(e)}>
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
