import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllComponents = React.lazy(() => import('./components/AllComponents.jsx'));
const LoadingSpinner = React.lazy(() => import('./components/common/LoadingSpinner'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="toast-wrapper">
          <ToastContainer />
        </div>
        <AllComponents />
      </Suspense>
    </BrowserRouter>
  );
}

