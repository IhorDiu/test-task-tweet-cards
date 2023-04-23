
import { useLocalStorage } from 'hooks/useLocalStorage';

export const useToggleFollowers = () => {
    const [isFollowing, setIsFollowing] = useLocalStorage('isFollowing', '');
    const toggle = () => setIsFollowing(isFollowing => !isFollowing);
    const btnLabel = () => (isFollowing ? 'Following' : 'Follow');
    const getBgColor = () => (isFollowing ? '#5CD3A8' : '#EBD8FF');
    const counterFollowers = number =>
      isFollowing
        ? (number + 1).toLocaleString('en-US')
        : number.toLocaleString('en-US');
  
    return { isFollowing, toggle, btnLabel, getBgColor, counterFollowers };
  };