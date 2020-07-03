import React from 'react';
import { TaskBox } from './todoitem_styles';
import { useState, useContext } from 'react';
import { deleteTask } from './todoitem_services';
import { TodoItemProps } from '../../Types';
import { smartReloadContext } from '../../Context/smartReload/smartReload';

const TodoItem = ({ text, id }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { Load } = useContext(smartReloadContext);

  const closeEditMode = (event: React.KeyboardEvent) => {
    if (Number(event.keyCode) === 27) {
      setEditMode(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id)
      .then(() => {
        Load();
      })
      .catch((error) => {
        console.error(error);
      });
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
          <button onClick={() => handleDelete(id)}>Deletar</button>
        </>
      )}
    </TaskBox>
  );
};

export default TodoItem;
