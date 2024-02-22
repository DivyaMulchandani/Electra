import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const navigateToUserSignup = () => {
    // 👇 navigate to /contacts
    navigate('/contacts');
  };

  const navigatetoAdminSignin = () => {
    // 👇 navigate to /
    navigate('/');
  };

}

