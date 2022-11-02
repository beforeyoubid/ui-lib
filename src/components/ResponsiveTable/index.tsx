import { useScreen } from '../../hooks/useScreen';
import { MyTable } from './Table';
import { TwoColumnTable } from './TwoColumnTable';
import { MyTableProps } from './types';

export const ResponsiveTable = ({ data }: MyTableProps): JSX.Element => {
  const { isMobile } = useScreen();

  const renderUI = () => {
    if (isMobile) return <TwoColumnTable data={data} />;
    return <MyTable data={data} />;
  };

  return <>{renderUI()}</>;
};
