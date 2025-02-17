import React from 'react';
import styles from './button.module.css';

export default function Button() {
  const handleClick = () => {
    alert('🚀 SpaceX Launch Sequence Initiated! 🛸  I will be surprised if you can find the button');
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
