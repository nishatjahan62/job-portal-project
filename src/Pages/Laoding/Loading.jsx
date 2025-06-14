import React from 'react';

const Loading = () => {
    return (
        <div className='text-blue-600 flex min-h-screen items-center justify-center'>
            <span className="loading loading-ring loading-2xl"></span><span className="loading loading-ring loading-2xl"></span><span className="loading loading-ring loading-2xl"></span>
        </div>
    );
};

export default Loading;