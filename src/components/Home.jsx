import React from 'react';

import Social from './Social';
import Data from './Data';

function Home() {
    return (
        <div className="max-w-[1440px] px-4 mx-auto my-0">
            <div>
                <div>
                    <Social />
                    <div className="bg-i"></div>
                    <Data />
                </div>
            </div>
        </div>
    );
}

export default Home;
