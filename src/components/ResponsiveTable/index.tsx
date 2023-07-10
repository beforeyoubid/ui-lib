import { useScreen } from '../../hooks/useScreen';
import { Table } from './Table';
import { TwoColumnTable } from './TwoColumnTable';
import { TableProps } from './types';

export const ResponsiveTable = ({ data }: TableProps): JSX.Element => {
  const { isMobile } = useScreen();

  const renderUI = () => {
    if (isMobile) return <TwoColumnTable data={data} />;
    return <Table data={data} />;
  };

  return <>{renderUI()}</>;
};
