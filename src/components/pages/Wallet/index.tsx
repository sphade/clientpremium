import React from 'react';
import { OutlineButton, PrimaryButton } from '../../../reusables';
import { ReactComponent as EmptyWallet} from '../../../assets/svgs/wallet-empty.svg'
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../routes/path';

const Wallet = () => {
    return (
        <div className="center">
                <div className="wallet">
                    <div className="wallet__header">
                        <p>Personal wallet balance</p>
                        <h3>N 1,000,000</h3>
                        <div className="wallet__header--buttonGroup">
                            <OutlineButton small classes="secondary" label="Fund wallet"/>
                            <OutlineButton small classes="secondary" label="Withdraw funds"/>
                        </div>
                    </div>
                    <div className="wallet__body">
                            <div className="wallet__body--header">
                            <h3 className="h3">Transaction history</h3>
                            <p >View All</p>
                            </div>
                            <div className="wallet__body--content">
                                <div className="empty">

                                <EmptyWallet />
                                <div>

                                <h3 className="h3 light">
                                    You currently have no transaction history
                                </h3>
                                <p className="ash-color">When you fund your wallet, it will appear here.</p>
                                </div>
                                <Link to={APP_ROUTES.carAddedSuccess}>
                                    <PrimaryButton label="Continue Payment" />
                                </Link>
                                </div>
                            </div>
                    </div>  
                </div>
        </div>
    )
}

export default Wallet
