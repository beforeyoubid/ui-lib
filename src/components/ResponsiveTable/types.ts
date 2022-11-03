export interface MyTableData {
  [key: string]: string | number | JSX.Element;
}

export interface MyTableProps {
  data: MyTableData[];
}
