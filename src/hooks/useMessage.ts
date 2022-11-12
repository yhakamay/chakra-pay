import { useToast } from '@chakra-ui/react';

type Props = {
  title: string;
  status: 'info' | 'success' | 'loading' | 'warning' | 'success' | 'error';
};

function useMessage() {
  const toast = useToast();
  const showMessage = (props: Props): void => {
    const { title, status } = props;
    toast({
      title,
      description: undefined,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  return { showMessage };
}

export default useMessage;
