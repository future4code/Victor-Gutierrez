import React from 'react';
import { TaskBox, TaskText } from './todoitem_styles';
import { useState, useContext } from 'react';
import { deleteTask } from './todoitem_services';
import { TodoItemProps } from '../../Types';
import { smartReloadContext } from '../../Context/smartReload/smartReload';

const TodoItem = ({ text, id }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [completed, setCompletion] = useState<boolean>(false);
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
    <TaskBox data-testid="task-box" onKeyDown={(e) => closeEditMode(e)}>
      <TaskText completion={completed}>{text}</TaskText>

      {editMode ? (
        <>
          <input placeholder="Insira o novo conteúdo" type="text" />
          <button disabled title="Não suportado pela API, apenas demonstrativo">
            Enviar
          </button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <button
            style={{
              background: completed ? '#d05a76' : 'white',
              color: completed ? 'white' : 'black',
            }}
            onClick={() => setCompletion((prev) => !prev)}
          >
            {completed ? 'Atividade Completa!' : 'Completar'}
          </button>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={() => handleDelete(id)}>Deletar</button>
        </>
      )}
    </TaskBox>
  );
};

export default TodoItem;
