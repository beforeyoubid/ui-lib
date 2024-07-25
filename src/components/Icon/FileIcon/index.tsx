import { File } from 'tabler-icons-react';

import { type CustomIconProps } from '../types';

import { CSV } from './CSV';
import { DOC } from './DOC';
import { DOCX } from './DOCX';
import { PDF } from './PDF';
import { PPT } from './PPT';
import { PPTX } from './PPTX';
import { TXT } from './TXT';
import { XLS } from './XLS';
import { XLSX } from './XLSX';

const extensionRegex = /\.(\w+)$/;

export const FileIcon: React.FC<Omit<CustomIconProps, 'icon'> & { url: string }> = ({ url, ...iconProps }) => {
  const extensionMatches = url.match(extensionRegex);

  const extension = extensionMatches?.[1];

  switch (extension?.toLocaleLowerCase()) {
    case 'pdf':
      return <PDF {...iconProps} />;
    case 'doc':
      return <DOC {...iconProps} />;
    case 'docx':
      return <DOCX {...iconProps} />;
    case 'txt':
      return <TXT {...iconProps} />;
    case 'xls':
      return <XLS {...iconProps} />;
    case 'xlsx':
      return <XLSX {...iconProps} />;
    case 'csv':
      return <CSV {...iconProps} />;
    case 'ppt':
      return <PPT {...iconProps} />;
    case 'pptx':
      return <PPTX {...iconProps} />;
    default:
      return <File {...iconProps} />;
  }
};
