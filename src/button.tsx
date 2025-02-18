import styles from './button.module.css';

export default function Button() {
  const handleClick = () => {
    alert('🚀 SpaceX Launch Sequence Initiated! 🛸  I will be surprised if you can find the button');
    alert('Surely Buttton is not working');
  };

  return (
    <button
      className={styles.spaceButton}
      onClick={handleClick}
    >
      Launch Sequence
    </button>
  );
}
