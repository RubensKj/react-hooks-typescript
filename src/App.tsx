import React, {
  useState,
} from 'react';

import './styles/global.css';

const App: React.FC = () => {
  const [user, setUser] = useState();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/rubenskj');
    const data = await response.json();

    setUser(data);
  }

  return (
    <div></div>
  );
}

export default App;
