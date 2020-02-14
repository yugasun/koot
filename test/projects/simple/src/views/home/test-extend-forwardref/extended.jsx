import React from 'react';
import { extend } from 'koot';

import styles from './extended.module.less';

// Functional Component =======================================================

const Extended = extend({
    connect: true,
    styles
})(
    React.memo(({ forwardedRef, className }) => {
        // console.log('forwardedRef', forwardedRef);
        return (
            <div
                ref={forwardedRef}
                className={className}
                id="__test-extend_forward_ref"
            >
                Extended
            </div>
        );
    })
);

export default Extended;