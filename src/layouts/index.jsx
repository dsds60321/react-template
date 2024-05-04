import Sidebar from './Sidebar/index.jsx';
import { Outlet } from 'react-router-dom';
import { Contents, ContentsWrap } from './styles.jsx';
import { Header } from './Header/index.jsx';
import { useToggle } from '../hooks/useHooks.js';

export const Layout = () => {
  const [isOpen, setOpen, handleOpen] = useToggle(false);

  return (
    <>
      <Sidebar open={isOpen} setOpen={setOpen} />
      <ContentsWrap>
        <Header open={isOpen} handleOpen={handleOpen} />
        <Contents>
          <Outlet />
        </Contents>
      </ContentsWrap>
    </>
  );
};
