import React from 'react';
import { TaskBox, TaskText, CompleteButton } from './todoitem_styles';
import { useState, useContext } from 'react';
import { deleteTask, completeTask, editTask } from './todoitem_services';
import { TodoItemProps } from '../../Types';
import { smartReloadContext } from '../../Context/smartReload/smartReload';

const TodoItem = ({ text, id, done }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>('');
  const { Load } = useContext(smartReloadContext);

  const closeEditMode = (event: React.KeyboardEvent) => {
    if (Number(event.keyCode) === 27) {
      setEditMode(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id).then(() => {
      Load();
    });
  };

  const handleComplete = async () => {
    if (done !== true) {
      await completeTask(id).then(() => {
        Load();
      });
    }
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const sendEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editTask(id, editContent).then(() => {
      Load();
      setEditContent('');
    });
  };

  return (
    <TaskBox data-testid="task-box" onKeyDown={(e) => closeEditMode(e)}>
      <TaskText completion={done}>{text}</TaskText>

      {editMode === true && done === false ? (
        <>
          <form onSubmit={sendEdit}>
            <input
              required
              minLength={3}
              onChange={handleEdit}
              placeholder="Insira o novo conteúdo"
              type="text"
              value={editContent}
            />
            <button type="submit">Enviar</button>
          </form>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <CompleteButton onClick={handleComplete} completion={done}>
            {done ? 'Atividade Completa!' : 'Completar'}
          </CompleteButton>
          {!done ? (
            <button onClick={() => setEditMode(true)}>Editar</button>
          ) : (
            <></>
          )}
          <button onClick={() => handleDelete(id)}>Deletar</button>
        </>
      )}
    </TaskBox>
  );
};

export default TodoItem;
