// useSuccessSnackbar.ts
import { useSnackbar, VariantType } from 'notistack';

const useAlertSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return { handleClickVariant };
};

export default useAlertSnackbar;
