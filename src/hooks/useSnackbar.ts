import { useSnackbar } from 'notistack';

const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const succesSnackbar = (message: string) =>
    enqueueSnackbar(
      message ||
        'Thank you for using our service, kindly expect a response within an hour',
      {
        variant: 'success',
      }
    );
  const errorSnackbar = (message: string) =>
    enqueueSnackbar(message || 'Something went wrong', {
      variant: 'error',
    });

  return {
    succesSnackbar,
    errorSnackbar,
  };
};

export default useCustomSnackbar;
