import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([] as string[]);

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault();
    setTaskList([...taskList, task]);
    setTask('');
  }

  return (
    <>
      <Header />
      <InputTask
        task={task}
        onSetTask={setTask}
        onHandleSubmitNewTask={handleSubmitNewTask}
      />
    </>
  );
}

export default App;
