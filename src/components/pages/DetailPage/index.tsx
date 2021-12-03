import React from 'react';
import DetailBanner from './DetailBanner';
import DetailContent from './DetailContent';
import FeaturedItems from './FeaturedItems';

const DetailPage = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <DetailBanner />
            <DetailContent />
            <FeaturedItems />
        </div>
    );
};

export default DetailPage;
