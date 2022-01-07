export enum TRANSACTION_TYPE {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}

export const transaction_history_mock_data = [
    {
        name: "Jetpool Fare",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.DEBIT,
        amount: 650000
    },
    {
        name: "Wallet Top up",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.CREDIT,
        amount: 650000
    },
    {
        name: "Withdrawn fund",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.CREDIT,
        amount: 250000
    },
    {
        name: "Wallet Top up",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.DEBIT,
        amount: 75000
    },
    {
        name: "Shared flight fare",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.CREDIT,
        amount: 23000
    },
    {
        name: "Jetpool Fare",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.DEBIT,
        amount: 950000
    },
    {
        name: "Jetpool Fare",
        date: 'Dec 06, 2021 13:20 PM',
        type:  TRANSACTION_TYPE.DEBIT,
        amount: 950000
    },
]


export const BANKS = [
	{ name: 'Access Bank', value: '044' },
	{ name: 'Access Money', value: '323' },
	{ name: 'Alat By Wema', value: '035A' },
	{ name: 'Ecobank Nigeria Plc', value: '050' },
	{ name: 'Fidelity Bank', value: '070' },
	{ name: 'First Bank of Nigeria', value: '011' },
	{ name: 'First City Monument Bank', value: '214' },
	{ name: 'Guaranty Trust Bank Plc', value: '058' },
	{ name: 'Heritage Bank', value: '030' },
	{ name: 'JAIZ Bank', value: '301' },
	{ name: 'Keystone Bank', value: '082' },
	{ name: 'Kuda', value: '50211' },
	{ name: 'Polaris Bank', value: '076' },
	{ name: 'Providus Bank', value: '101' },
	{ name: 'Stanbic IBTC Bank Plc', value: '221' },
	{ name: 'Standard Chartered Bank', value: '068' },
	{ name: 'Sterling Bank', value: '232' },
	{ name: 'Union Bank', value: '032' },
	{ name: 'United Bank for Africa', value: '033' },
	{ name: 'Unity Bank', value: '215' },
	{ name: 'VFD Microfinance Bank Limited', value: '566' },
	{ name: 'Wema Bank', value: '035' },
	{ name: 'Zenith Bank', value: '057' },
];