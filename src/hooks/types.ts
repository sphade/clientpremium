import { History } from 'history';

export interface useStepsProps {
	currentStep: number;
	nextStep: () => void;
	isDone: boolean;
	jumpToStep: (v: number) => void;
	previousStep: () => void;
	totalSteps: number;
}

export interface useDialogHooksProps {
	open: boolean;
	toggleDialog: () => void;
	
}

export interface useCountdownInitializeProps {
	hours?: number;
	minutes?: number;
	seconds?: number;
}

export interface useCountdownProps {
	hoursLeft: string | number;
	isOver: boolean;
	minutesLeft: string | number;
	pause: () => void;
	reset: () => void;
	resume: () => void;
	secondsLeft: string | number;
	start: () => void;
	isRunning: boolean;
}

export interface useHippoHistoryProps extends History {
	flushRouterState: () => void;
	addRouterState: (state: Record<string, unknown>) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	routerState: any;
}

export type OtpReferrer = 'SIGN_IN' | 'SIGN_UP' | 'GUARANTOR';

export enum OtpType {
	SIGN_IN = 'SIGN_IN',
	SIGN_UP = 'SIGN_UP',
	GUARANTOR = 'GUARANTOR',
}


export type GeoPosition = {
	accuracy?: number;
	latitude?: number;
	longitude?: number;
	timestamp?: number;
	error?: string;
};

export interface UserData {
	phoneNumber?: string;
	firstName?: string;
	lastName?: string;
}

export enum FileCompressionStatus {
	pending = 'PENDING',
	compressing = 'WORKING',
	error = 'ERROR',
	done = 'DONE',
}

export type FileCompressionResult = [(file: File) => Promise<Blob | File>, FileCompressionStatus];

export type ErrorLogger = (error: Error | string | number | Record<string, unknown> | []) => void;

export interface LocationData {
	coordinates: {
		lat: number;
		lng: number;
	};
	country: string;
	state: string;
	location: string;
}
export interface INetworkInformation extends EventTarget {
	readonly downlink: number;
	readonly downlinkMax: number;
	readonly effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
	readonly rtt: number;
	readonly saveData: boolean;
	readonly type:
		| 'bluetooth'
		| 'cellular'
		| 'ethernet'
		| 'none'
		| 'wifi'
		| 'wimax'
		| 'other'
		| 'unknown';

	onChange: (event: Event) => void;
}

export enum NetworkSpeedType {
	VERY_SLOW = 'slow-2g',
	SLOW = '2g',
	OKAY = '3g',
	FAST = '4g',
}

export enum NetworkSpeed {
	SLOW = 'SLOW',
	FAST = 'FAST',
}


export enum CharterType {
	AIR = "AIR",
	LAND = 'LAND',
	SEA = 'SEA'

}