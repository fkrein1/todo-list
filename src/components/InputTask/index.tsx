import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        <span>Criar</span>
        
      </button>
    </div>
  );
}
