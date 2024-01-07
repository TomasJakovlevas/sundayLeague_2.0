import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

export const SearchModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        className='text-xs sm:text-base text-primary-700'
        radius={'lg'}
        variant={'light'}
        color={'primary'}
        startContent={
          <div className='w-[20px] h-[20px] border border-[red] '>
            {
              // TODO: search icon
            }
          </div>
        }
      >
        Search
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='4xl'
        scrollBehavior='inside'
      >
        <ModalContent>
          <ModalHeader className='flex items-center gap-3'>
            <div className='w-[20px] h-[20px] border border-[red] '>
              {
                // TODO: search icon
              }
            </div>
            <Input
              type='text'
              size={'sm'}
              variant={'underlined'}
              color='primary'
              placeholder='Search'
            />
          </ModalHeader>
          <ModalBody>
            <div className='text-center'>No content</div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
