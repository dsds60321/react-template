import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderDetailWrap, HeaderLeft, HeaderRight, HeaderWrap, UserIcon } from './styles.jsx';

export const Header = ({ open, handleOpen }) => {
  return (
    <HeaderWrap>
      <HeaderLeft>
        <FontAwesomeIcon size={'lg'} icon={open ? 'angles-left' : 'angles-right'} onClick={handleOpen} />
      </HeaderLeft>
      <HeaderRight>
        <HeaderDetailWrap>
          <UserIcon />
          <p>아이디</p>
          <FontAwesomeIcon style={{ marginLeft: '10px', color: '#b8c0ca' }} icon="caret-down" />
        </HeaderDetailWrap>
        <HeaderDetailWrap>
          <FontAwesomeIcon style={{ color: '#b8c0ca' }} icon="sign-out" />
        </HeaderDetailWrap>
      </HeaderRight>
    </HeaderWrap>
  );
};
