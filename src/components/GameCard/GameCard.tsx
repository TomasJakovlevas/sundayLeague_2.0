'use client';

import { GameCardPreview } from './GameCardPreview';
import { GameCardHeader } from './GameCardHeader';
import { GameCardBody } from './GameCardBody';

import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';

const GameCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card isPressable onPress={onOpen} className='text-primary-700 w-full'>
        <CardHeader className='flex items-start gap-2 sm:gap-3 flex'>
          <GameCardHeader />
        </CardHeader>

        <CardBody className='flex flex-col gap-2 sm:gap-3'>
          <GameCardBody />
        </CardBody>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='4xl'
        scrollBehavior='inside'
      >
        <ModalContent>
          <ModalBody>
            <GameCardPreview />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameCard;
