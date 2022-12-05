import React from 'react';
/*
  Try to keep icon list in alphabetical order when adding your icons
*/

import {
  AccountBalance,
  Add,
  Announcement,
  ArrowBack,
  ArrowDropDown,
  ArrowForward,
  Assignment,
  AssignmentInd,
  AssignmentTurnedIn,
  Attachment as AttachFile,
  AttachMoney as Cost,
  Autorenew,
  BarChart,
  BugReport as Pest,
  Cancel,
  Chat,
  Clear,
  CloudDownload,
  CloudUpload,
  Close,
  ContactPhone,
  CreditCard,
  Dashboard,
  DeleteOutline,
  Description,
  Done,
  Email,
  Edit as EditMui,
  Equalizer,
  ExpandMore,
  FiberManualRecord,
  FolderOpen as Strata,
  Group,
  Help,
  HighlightOff,
  History,
  Home,
  HourglassEmptyOutlined as Hourglass,
  Info,
  LibraryBooks,
  ListAlt,
  LocationCity as BPI,
  Place as Location,
  LockOutlined,
  Menu,
  MonetizationOn,
  MoreVert,
  NewReleases,
  NoteAdd,
  NotificationsActive,
  NotInterested,
  OpenInNew,
  Pause,
  PauseCircleOutline,
  PermIdentity,
  Person,
  PersonAddOutlined,
  Phone,
  PhoneIphone,
  PhotoCamera,
  PlayArrow,
  PlayCircleFilled,
  PlaylistAdd,
  Pool,
  Power,
  PriorityHigh,
  Receipt,
  Refresh,
  Settings,
  ShoppingCart,
  Star,
  TurnedInNotOutlined as Lead,
  Update,
  Visibility,
  WarningRounded,
  WifiTetheringOutlined as Live,
  SystemUpdate as DownloadDocument,
} from '@material-ui/icons';

import { automation } from '../../utils';

import { Edit } from './CustomIcon';

import { IconProps } from './types';
import { Keys } from '../../my-constants';

export const Icon = ({ type, ...rest }: Omit<IconProps, 'type'> & { type: Maybe<IconProps['type']> }) => {
  rest = { ...rest, ...automation(Keys.Component.Icon, { type }) };
  switch (type) {
    case 'arrow-back':
      return <ArrowBack {...rest} />;

    case 'arrow-drop-down':
      return <ArrowDropDown {...rest} />;

    case 'arrow-forward':
      return <ArrowForward {...rest} />;

    case 'close':
      return <Close {...rest} />;

    case 'cancel':
      return <Cancel {...rest} />;

    case 'cog':
      return <Settings {...rest} />;

    case 'credit-card':
      return <CreditCard {...rest} />;

    case 'plug':
    case 'power':
      return <Power {...rest} />;

    case 'bar-graph':
      return <BarChart {...rest} />;

    case 'bulleted-list':
      return <ListAlt {...rest} />;

    case 'bust':
      return <PermIdentity {...rest} />;

    case 'double-bust':
      return <Group {...rest} />;

    case 'announcement':
      return <Announcement {...rest} />;

    case 'new-releases':
      return <NewReleases {...rest} />;

    case 'receipt':
      return <Receipt {...rest} />;

    case 'monetization-on':
      return <MonetizationOn {...rest} />;

    case 'menu':
      return <Menu {...rest} />;

    case 'record':
      return <FiberManualRecord {...rest} />;

    case 'cloud-download':
      return <CloudDownload {...rest} />;

    case 'cloud-upload':
      return <CloudUpload {...rest} />;

    case 'document-download':
      return <DownloadDocument {...rest} />;

    case 'tick':
      return <Done {...rest} />;

    case 'user':
      return <Person {...rest} />;

    case 'user-add-outline':
      return <PersonAddOutlined {...rest} />;

    case 'lock':
      return <LockOutlined {...rest} />;

    case 'eye':
      return <Visibility {...rest} />;

    case 'books':
      return <LibraryBooks {...rest} />;

    case 'contact-phone':
      return <ContactPhone {...rest} />;

    case 'chat':
      return <Chat {...rest} />;

    case 'cost':
    case 'refund':
      return <Cost {...rest} />;

    case 'edit':
      return <Edit {...rest} />;

    case 'edit-mui':
      return <EditMui {...rest} />;

    case 'expand-more':
      return <ExpandMore {...rest} />;

    case 'openInNew':
      return <OpenInNew {...rest} />;

    case 'delete':
      return <DeleteOutline {...rest} />;

    case 'history':
      return <History {...rest} />;

    case 'play-circle':
      return <PlayCircleFilled {...rest} />;

    case 'list-add':
      return <PlaylistAdd {...rest} />;

    case 'clear':
      return <Clear {...rest} />;

    case 'add':
      return <Add {...rest} />;

    case 'email':
      return <Email {...rest} />;

    case 'info':
      return <Info {...rest} />;

    case 'location':
      return <Location {...rest} />;

    case 'bank':
      return <AccountBalance {...rest} />;

    case 'home':
      return <Home {...rest} />;

    case 'shopping':
      return <ShoppingCart {...rest} />;

    case 'refresh':
      return <Autorenew {...rest} />;

    case 'resend':
      return <Refresh {...rest} />;

    case 'highlight-off':
      return <HighlightOff {...rest} />;

    case 'notifications':
      return <NotificationsActive {...rest} />;

    case 'dashboard':
      return <Dashboard {...rest} />;

    case 'equalizer':
      return <Equalizer {...rest} />;

    case 'note-add':
      return <NoteAdd {...rest} />;

    case 'assignment':
      return <Assignment {...rest} />;

    case 'assignment-ind':
      return <AssignmentInd {...rest} />;

    case 'assignment-turned-in':
      return <AssignmentTurnedIn {...rest} />;

    // case 'circular-loader':
    //   return <CircularProgress {...rest} color={rest.color as 'primary' | 'secondary' | 'inherit' | undefined} />;

    case 'warning':
      return <WarningRounded {...rest} />;

    case 'update':
      return <Update {...rest} />;

    case 'hold':
      return <PauseCircleOutline {...rest} />;

    case 'star':
      return <Star {...rest} />;

    case 'photo':
      return <PhotoCamera {...rest} />;

    case 'lead':
      return <Lead {...rest} />;

    case 'phone':
      return <Phone {...rest} />;

    case 'wait':
      return <Hourglass {...rest} />;

    case 'live':
      return <Live {...rest} />;

    case 'report':
      return <Description {...rest} />;

    case 'attach':
      return <AttachFile {...rest} />;

    case 'disabled':
      return <NotInterested {...rest} />;

    case 'pest':
      return <Pest {...rest} />;

    case 'building_pest':
      return <BPI {...rest} />;

    case 'strata':
      return <Strata {...rest} />;

    case 'pool':
      return <Pool {...rest} />;

    case 'play':
      return <PlayArrow {...rest} />;

    case 'pause':
      return <Pause {...rest} />;
    case 'priority-high':
      return <PriorityHigh {...rest} />;

    case 'message':
      return <PhoneIphone {...rest} />;

    case 'successful-buyer':
      return <AssignmentInd {...rest} />;

    case 'help':
    case 'question-mark':
      return <Help {...rest} />;

    case 'kebab-menu':
      return <MoreVert {...rest} />;

    default:
      return null;
  }
};
