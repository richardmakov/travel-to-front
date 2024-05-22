// useSuccessSnackbar.ts
import { useSnackbar, VariantType } from 'notistack';

const useSuccessSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return { handleClickVariant };
};

export default useSuccessSnackbar;
