import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { CustomModalProps } from './modalProps';


const CustomModal = ({ children, open, onClose }: CustomModalProps) => {

    const [openModal, setOpenModal] = useState<boolean>(open)

    const handleClose = () => setOpenModal(false);

    return (
        <Modal
            open={openModal}
            closeAfterTransition
            onClose={onClose ?? handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {children}
            {/* <Box >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        {"Title"}
                    </Box>
                    <IconButton sx={{ borderRadius: '100%' }} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                {
                    children
                }
            </Box> */}

        </Modal >
    );
}

export default CustomModal