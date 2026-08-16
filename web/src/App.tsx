import { Navigate, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './WelcomePage.tsx';

const CANONICAL_CUSTOMER_ID = 'ff535484-6880-4653-b06e-89983ecf4ed5';

export default function App() {
  return (
    <Routes>
      <Route path="/welcome/:userId" element={<WelcomePage />} />
      <Route
        path="/"
        element={
          <Navigate to={`/welcome/${CANONICAL_CUSTOMER_ID}`} replace />
        }
      />
    </Routes>
  );
}
