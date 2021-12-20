import { useState } from 'react';
import { useDialogHooksProps } from './types';

const useDialogHook = (): useDialogHooksProps => {
	const [open, setOpen] = useState(false);
	const toggleDialog = () => setOpen(!open);

	return { open,  toggleDialog };
};

export default useDialogHook;
