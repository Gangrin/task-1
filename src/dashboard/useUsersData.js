import { useState, useEffect } from 'react';

/**
 * hook gets array of objects with users data
 * @returns {Object[]}
 */
export function useUsersData() {
  const [users, setUsers] = useState([]);

  const editAddUser = (id, data) => {
    const { name, email } = data;

    if (id === 'add') {
      setUsers([
        ...users,
        {
          name,
          email,
          id: users.length + 1
        }
      ]);
    } else {
      const temp = users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            name: name ? name : user.name,
            email: email ? email : user.email
          }
        }
        return user;
      });

      setUsers(temp);
    }
  };

  const deleteUser = (id) => {
    const temp = users.filter(user => user.id !== id);
    setUsers(temp);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUsers(data);
    })();
  }, []);

  return [users, deleteUser, editAddUser];
}
