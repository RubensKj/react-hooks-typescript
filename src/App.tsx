import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

import './styles/global.css';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<[User]>();
  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);

  return (
    <div>
      {names}
    </div>
  );
}

export default App;
