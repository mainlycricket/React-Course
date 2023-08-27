import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>

      <button onClick={openModal} className="btn">
        open modal
      </button>
    </main>
  );
};
export default Home;
