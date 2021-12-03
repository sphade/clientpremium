import React from 'react';
import { useCheckCharterType } from '../../../hooks';
import { CharterType } from '../../../hooks/types';

const DetailContent = () => {
    const charterType = useCheckCharterType();

    const isLand = charterType === CharterType.LAND;
    return (
        <article className="detail-content">
            <div className="center detail-content__top center">
                <h3>ABOUT {isLand ? 'BMW' : 'SKY NIGHT 6000'}</h3>
                <p>
                    The Global 6000 aircraft features a spacious three zone cabin to help you
                    conduct a business meetings, relax or get a good night’s sleep. Work, rest and
                    entertaining is easy with a Global 6000.
                </p>
            </div>
            <div className="center detail-content__card">
                <h3>SPECIFICATIONS</h3>
                <p>
                    The Global 6000 aircraft features a spacious three zone cabin to help you
                    conduct a business meetings, relax or get a good night’s sleep. Work, rest and
                    entertaining is easy with a Global 6000.
                </p>
            </div>
        </article>
    );
};

export default DetailContent;
