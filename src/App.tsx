import React, {
  useState,
} from 'react';

import './styles/global.css';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/rubenskj');
    const data = await response.json();

    setUser(data);
  }

  return (
    <div>
      {user?.name}
    </div>
  );
}

export default App;
