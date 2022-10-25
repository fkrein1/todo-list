import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';
import styles from './styles.module.scss';


interface InputTaskProps {
  task: string;
  onSetTask: (task: string) => void;
  onHandleSubmitNewTask: (event: FormEvent) => void;
}

export function Input(props: InputTaskProps) {
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    props.onSetTask(event.target.value);
  }

  const taskEmpty = props.task.length === 0;

  return (
    <form className={styles.wrapper} onSubmit={props.onHandleSubmitNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={props.task}
        onChange={handleNewTaskChange}
      />
      <button type="submit" disabled={taskEmpty}>
        <span>Criar</span>
        <PlusCircle size={16} color="#F2F2F2" />
      </button>
    </form>
  );
}
