import { ITask } from '../../App';
import clipBoard from '../../assets/clipboard.svg';
import { Task } from '../Task';
import styles from './styles.module.scss';

interface TaskListProps {
  onHandleDeleteTaks: (taskToDelete: ITask) => void;
  onHandleChangeTaskStatus: (taskToEdit: ITask) => void;
  taskList: ITask[];
}

export function TaskList(props: TaskListProps) {
  const totalTasks = props.taskList.length;
  const doneTasks = props.taskList.filter((task) => task.done).length;
  const noTasks = props.taskList.length === 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksStatus}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          {noTasks ? (
            <span>{totalTasks}</span>
          ) : (
            <span>{`${doneTasks} de ${totalTasks}`}</span>
          )}
        </div>
      </div>

      {noTasks ? (
        <div className={styles.emptyTasks}>
          <img src={clipBoard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.tasksWrapper}>
          {props.taskList.map((task) => (
            <Task
              onHandleDeleteTaks={props.onHandleDeleteTaks}
              onHandleChangeTaskStatus={props.onHandleChangeTaskStatus}
              task={task}
              key={task.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
