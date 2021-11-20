import { useState } from 'react';
import { useDialogHooksProps } from './types';

const useDialogHook = (): useDialogHooksProps => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return { open, handleOpen, handleClose };
};

export default useDialogHook;
