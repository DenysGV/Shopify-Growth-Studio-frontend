import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
   const navigate = useNavigate();

   const moveToPage = (page: string): void => {
      navigate(`/${page}`);
   };

   return { moveToPage };
};

export default useNavigation;