import React from 'react'
import { Modal, Group, Button } from '@mantine/core';
import { News } from '../../Models/News';

const DeleteConfirmationModal = ({ elementToDelete, isOpen, closeModal, deleteCurrentNews } : 
  { elementToDelete:any ,isOpen: boolean, closeModal: React.Dispatch<React.SetStateAction<boolean>>, 
    deleteCurrentNews: any }) => {

  return (
    <Modal opened={isOpen} onClose={() => closeModal(false)} size='full' title="Confirmation de suppression" centered>
          <div className='d-flex flex-column mb-2'>
              <label htmlFor="delete">Pour confirmer la suppression</label>
              <input type="text" disabled name='delete' placeholder='delete' />
          </div>
        <button type="button" className="btn btn-danger" onClick={() => deleteCurrentNews(elementToDelete.id)}>Supprimer</button>
    </Modal>
  )
}

export default DeleteConfirmationModal