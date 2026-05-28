import { useIsMobile } from '@/components/ui/use-mobile';

export const useAdaptive = () => {
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
};
