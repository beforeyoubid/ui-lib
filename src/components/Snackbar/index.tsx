import { createContext, type ReactNode, useContext, useMemo, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material';
import { toast, ToastContainer, type ToastOptions, type IconProps } from 'react-toastify';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface ToastNotificationProps {
  message: string;
  type: NotificationType;
  options?: ToastOptions;
  autoClose?: number | false;
  icon?: false | ((props: IconProps) => React.ReactNode) | React.ReactElement<IconProps>;
}

interface NotificationContextProps {
  showNotification: (props: ToastNotificationProps) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => {},
});

const notify = (props: ToastNotificationProps) => {
  const { type, message, options, icon, autoClose } = props;
  const toastOptions: ToastOptions = {
    ...options,
    hideProgressBar: true,
    icon: icon ?? false,
    autoClose: autoClose,
  };
  switch (type) {
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'info':
      toast.info(message, toastOptions);
      break;
    case 'warning':
      toast.warn(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
      break;
  }
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<ToastNotificationProps | null>(null);

  const showNotification = useMemo(
    () => (props: ToastNotificationProps) => {
      setNotification(props);
    },
    [setNotification]
  );

  if (notification) {
    notify(notification);
    setNotification(null);
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <StyledToastContainer />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

const StyledToastContainer = styled(ToastContainer)(({ theme }) => ({
  '.Toastify__toast--success': {
    backgroundColor: theme.palette.colors.mintL4,
    boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    borderRadius: 4,
    color: theme.palette.colors.dark90,
    '& .Toastify__toast-icon': {
      color: theme.palette.colors.mint60,
      backgroundColor: theme.palette.colors.mintL2,
    },
    '& .Toastify__close-button': {
      color: theme.palette.colors.dark90,
      alignSelf: 'center',
    },
  },
  '.Toastify__toast--error': {
    backgroundColor: theme.palette.colors.errorL1,
    color: theme.palette.colors.dark90,
    '& .Toastify__toast-icon': {
      color: theme.palette.colors.error75,
      backgroundColor: theme.palette.colors.error15,
    },
    '& .Toastify__close-button': {
      color: theme.palette.colors.dark90,
      alignSelf: 'center',
    },
  },
  '.Toastify__toast--warning': {
    backgroundColor: theme.palette.colors.warningL3,
    color: theme.palette.colors.dark90,
    '& .Toastify__toast-icon': {
      color: theme.palette.colors.warning45,
      backgroundColor: theme.palette.colors.warningL1,
    },
    '& .Toastify__close-button': {
      color: theme.palette.colors.dark90,
      alignSelf: 'center',
    },
  },

  '.Toastify__toast--info': {
    backgroundColor: theme.palette.colors.dark90,
    color: theme.palette.colors.lightWhite,
    '& .Toastify__toast-icon': {
      color: theme.palette.colors.lightWhite,
      backgroundColor: theme.palette.colors.dark75,
    },

    '& .Toastify__close-button': {
      color: theme.palette.colors.lightWhite,
      ...theme.typography.size.base,
      alignSelf: 'center',
    },
  },

  '.Toastify__toast-icon': {
    height: 18,
    width: 18,
    borderRadius: 17,
    padding: theme.spacing(0.5),
    gap: theme.spacing(1.25),
    '& svg': {
      height: 18,
      width: 18,
    },
  },
  '.Toastify__toast-body': {
    ...theme.typography.size.sm,
  },

  '--toastify-font-family': theme.typography.fontFamily,
}));
