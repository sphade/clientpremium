import { useEffect, useState } from 'react';
import { useCountdownInitializeProps, useCountdownProps } from './types';

/** Countdown hook for absolutely anything countdown related. */
const useCountdown = ({
	hours = 0,
	minutes = 0,
	seconds = 0,
}: useCountdownInitializeProps): useCountdownProps => {
	const [paused, setPaused] = useState(false);
	const [isRunning, setRunningState] = useState(false); // Hold countdown running state
	const [over, setOver] = useState(false); // Hold countdown finished state
	const [startTimer, setStarTimer] = useState(false); // Hold countdown running state
	const [[h, m, s], setTime] = useState([hours, minutes, seconds]); // Hold Config State

	// Tick downwards to 0
	const tick = () => {
		// if timer is paused or is 0, do nothing
		if (paused || over) return;

		// Start running
		setRunningState(true);

		if (h === 0 && m === 0 && s === 0) {
			setOver(true);
			setStarTimer(false);
			setRunningState(false);
		} else if (m === 0 && s === 0) {
			setTime([h - 1, 59, 59]);
		} else if (s === 0) {
			setTime([h, m - 1, 59]);
		} else {
			setTime([h, m, s - 1]);
		}
	};

	// Reset to initial config state
	const reset = () => {
		setTime([hours, minutes, seconds]);
		setPaused(false);
		setOver(false);
		setStarTimer(false);
		setRunningState(false);
	};

	// Pause countdown
	const pause = () => {
		setPaused(true);
		setRunningState(false);
	};

	// Resume countdown
	const resume = () => {
		setPaused(false);
		setRunningState(true);
	};

	// Start countdown
	const start = () => {
		setStarTimer(true);
		setRunningState(true);
	};

	// Mount and start tick interval
	useEffect(() => {
		const timerID = startTimer && setInterval(() => tick(), 1000) ;
		return () => clearInterval(timerID as NodeJS.Timeout);
	});

	return {
		hoursLeft: h < 10 ? `0${h}` : h,
		isOver: over,
		minutesLeft: m < 10 ? `0${m}` : m,
		pause,
		reset,
		resume,
		secondsLeft: s < 10 ? `0${s}` : s,
		start,
		isRunning,
	};
};

export default useCountdown;
