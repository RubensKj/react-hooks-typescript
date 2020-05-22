import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer
} from 'react';

import './styles/global.css';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();
  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);

  const gretting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  )

  inputRef.current.focus();

  return (
    <div>
      {names}
      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
    </div>
  );
}

export default App;
