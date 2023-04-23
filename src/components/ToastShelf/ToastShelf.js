import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, removeToast}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} handleDismiss={removeToast} toastId={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
