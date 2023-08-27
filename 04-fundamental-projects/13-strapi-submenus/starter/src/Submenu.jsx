import { useGlobalContext } from './context';
import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId == pageId);

  if (!currentPage) return <></>;

  const { page, links } = currentPage;
  const styles = { gridTemplateColumns: '1fr' };
  if (links.length > 3) styles.gridTemplateColumns = '1fr 1fr';

  function handleMouseLeave(e) {
    setPageId(null);
  }

  return (
    <div className="submenu show-submenu" onMouseLeave={handleMouseLeave}>
      <h5>{page}</h5>
      <div className="submenu-links" style={styles}>
        {links.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
