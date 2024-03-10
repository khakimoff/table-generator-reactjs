import { Portal } from 'react-portal';

interface PortalHOCProps {
  isOpenPortal?: boolean;
  children: React.ReactNode;
}

export const PortalHOC = ({ isOpenPortal, children }: PortalHOCProps) => {
  if (!isOpenPortal) return null;

  return <Portal>{children}</Portal>;
};
