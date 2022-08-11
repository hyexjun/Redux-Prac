import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div onClick={() => navigate('/')}>Our Todo List</div>
      <div>React</div>
    </div>
  );
};
export default Header;
