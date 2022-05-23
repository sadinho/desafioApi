import React, { useState } from 'react';
import { AlertDrawer } from './styles';

export const Alert = ({
  children,
  timeOpen,
  type,
  setFlagFalse,
}) => {
  const [open, setOpen] = useState(true);
  setTimeout(() => {
    setOpen(false);
    setFlagFalse();
  }, timeOpen);

  return (
    open
    && (
      <AlertDrawer type={type}>
        {children}
      </AlertDrawer>
    )
  );
};
