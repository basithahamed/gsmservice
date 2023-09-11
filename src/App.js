


import './App.css';

import Home from "./components/Home"
import Sidebar from './components/Sidebar';

import { Route, Routes, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import PendingOrder from './components/PendingOrder';
import AcceptedOrder from './components/AcceptedOrder';
import AllOrder from './components/AllOrder';
import CompletedOrder from './components/CompletedOrder';
import View from './components/View';
import Login from './components/Login';
import { AuthProvider, } from "./context/AuthContext"

import RequireAuth from './components/RequireAuth';


function App() {
  const location = useLocation(); // Get the current route location

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      <AuthProvider>
        <Container>
          {!isLoginPage && <Sidebar />}
          <Routes>
            <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='/pendingorder' element={<RequireAuth><PendingOrder /></RequireAuth>} />
            <Route path='/acceptedorder' element={<RequireAuth><AcceptedOrder /></RequireAuth>} />
            <Route path='/allorder' element={<RequireAuth><AllOrder /></RequireAuth>} />
            <Route path='/completedorder' element={<RequireAuth><CompletedOrder /></RequireAuth>} />
            <Route path='/view:id' element={<RequireAuth><View /></RequireAuth>} />
            <Route path='/login' element={<RequireAuth><Login /></RequireAuth>} />
          </Routes>
        </Container>
      </AuthProvider>
    </div>
  );
}

const Container = styled.div`
display:flex;

`
export default App;










