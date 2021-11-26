import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../../../assets/svgs/arrow-right-secondary.svg';
import { PrimaryButton } from '../../../reusables';
import { APP_ROUTES } from '../../../routes/path';

const ListContent = ({ title, content }: { title: string; content: string }) => (
    <p>
        <span className="bold">{title}</span>: <span>{content}</span>
    </p>
);
const PickupSummary = () => {
    return (
        <article className="payment-method pickup-summary">
            <div className="payment-method__container pickup-summary__container">
                <h3>PICK UP SUMMARY</h3>
                <div className="pickup-summary__content">
                    <ListContent title="Date" content="Nov-20-2021" />
                    <p className="content-direction">
                        <span>Lekki phase1</span>{' '}
                        <span>
                            <ArrowRight />
                        </span>{' '}
                        <span>Muritala Muhammed</span>{' '}
                    </p>
                    <ListContent title="Pick-up time" content="09:00" />
                    <ListContent title="Trip type" content="One Stop Trip" />
                    <ListContent title="Car type" content="Sedan" />
                </div>
                <Link to={APP_ROUTES.carAddedSuccess}>
                    <PrimaryButton label="Add Car" />
                </Link>
            </div>
        </article>
    );
};

export default PickupSummary;
