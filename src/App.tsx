import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';

export interface ITask {
  done: boolean;
  value: string;
  id: string;
}

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([] as ITask[]);

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault();
    setTaskList([...taskList, { value: task, done: false, id: uuid() }]);
    setTask('');
  }

  function handleDeleteTaks(taskToDelete: ITask) {
    const taskWithoutDeletedOne = taskList.filter(
      (task) => task.id !== taskToDelete.id,
    );
    setTaskList(taskWithoutDeletedOne);
  }

  function handleChangeTaskStatus(taskToChange: ITask) {
    const tasksWithUpdatedStatus = taskList.map((task) => {
      if (task.id === taskToChange.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTaskList(tasksWithUpdatedStatus);
  }

  return (
    <>
      <Header />
      <Input
        task={task}
        onSetTask={setTask}
        onHandleSubmitNewTask={handleSubmitNewTask}
      />
      <TaskList
        onHandleDeleteTaks={handleDeleteTaks}
        onHandleChangeTaskStatus={handleChangeTaskStatus}
        taskList={taskList}
      />
    </>
  );
}

export default App;
