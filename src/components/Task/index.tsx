import { Circle, Trash } from 'phosphor-react';
import checkCircle from '../../assets/checkcircle.svg'
import { ITask } from '../../App';
import styles from './styles.module.scss';

interface TaskProps {
  onHandleDeleteTaks: (taskToDelete: ITask) => void;
  onHandleChangeTaskStatus: (taskToEdit: ITask) => void;
  task: ITask;
}

export function Task(props: TaskProps) {
  const taskDone = props.task.done;

  return (
    <div className={styles.wrapper}>
      {!taskDone && (
        <Circle
          color='#4EA8DE'
          size={24}
          onClick={() => props.onHandleChangeTaskStatus(props.task)}
        />
      )}
      {taskDone && (
        <img
          src={checkCircle}
          onClick={() => props.onHandleChangeTaskStatus(props.task)}
        />
      )}
      <p>{props.task.value}</p>
      <Trash  
        color='#808080'
        size={24}
        onClick={() => props.onHandleDeleteTaks(props.task)}

      />
    </div>
  );
}
