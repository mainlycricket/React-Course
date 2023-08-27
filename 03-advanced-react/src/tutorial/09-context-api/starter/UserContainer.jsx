import { useNavContext } from './Navbar';

const UserContainer = () => {
  const { user, login, logout } = useNavContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>hello, {user.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please login</p>
          <button className="btn" onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
