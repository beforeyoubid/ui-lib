export interface TableData {
  [key: string]: string | number | JSX.Element;
}

export interface TableProps {
  data: TableData[];
}
