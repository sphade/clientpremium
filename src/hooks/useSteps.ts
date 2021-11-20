import { useState } from 'react';
import { useStepsProps } from './types';

/** Create steps */
const useSteps = (totalSteps: number): useStepsProps => {
	const [currentStep, setStep] = useState(1);
	const [isDone, setIsDone] = useState(false);

	if (!totalSteps) {
		throw new Error('Total Steps is required');
	}

	const nextStep = () => {
		if (currentStep === totalSteps) {
			return setIsDone(true);
		}
		return setStep(prevStep => prevStep + 1);
	};

	const previousStep = () => {
		if (currentStep - 1 >= 1) {
			return setStep(prevStep => prevStep - 1);
		}

		return null;
	};

	const jumpToStep = (newStep: number) => {
		if (newStep > 0 && newStep <= totalSteps) {
			return setStep(newStep);
		}

		return null;
	};

	return {
		currentStep,
		isDone,
		jumpToStep,
		nextStep,
		previousStep,
		totalSteps,
	};
};

export default useSteps;
