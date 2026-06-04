import { useIsMobile } from './useMobile';

export const useAdaptive = () => {
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
};
