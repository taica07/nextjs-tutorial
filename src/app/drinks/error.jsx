'use client';

const error = (error) => {
  return <h3 className="text-2xl text-orange-500">{error.error.message}</h3>;
};

export default error;
