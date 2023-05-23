import React, { useState, useEffect } from 'react'
import { Rating } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { Modal, Group, Text , Image} from '@mantine/core'
import { uploadFile } from '../../Controllers/files'
import { AiOutlineClose } from 'react-icons/ai'
import { GrUploadOption } from 'react-icons/gr'
import { Temoignages } from '../../Models/Temoignages'

export const AddOrEditTemoignagesModal = ({
  isOpen,
  handleCloseModal,
  submitTemoignages,
  temoignageToUpdate
}: { isOpen: boolean, handleCloseModal: any, submitTemoignages: any, temoignageToUpdate?: Temoignages }) => {

  const [form, setForm] = useState({
    id: '',
    prenom: '',
    nom: '',
    description: '',
    imageUrl: '',
    stars: 4
  })

  useEffect(() => {
    if(temoignageToUpdate) {
      setForm({
        id: temoignageToUpdate.id,
        prenom: temoignageToUpdate.prenom,
        nom: temoignageToUpdate.nom,
        description: temoignageToUpdate.description,
        imageUrl: temoignageToUpdate.imageUrl,
        stars: temoignageToUpdate.stars
      })
    }
  }, [])
  

  const onImageChange = async (files: any) => {
    const uploadedImageUrl = await uploadFile(files[0], "images")
    if(uploadedImageUrl) setForm({ ...form, imageUrl: uploadedImageUrl })
  }

  const submitForm = (event: any) => { 
    event?.preventDefault()
    submitTemoignages(form) 
  }

  return (
    <>
      <Modal opened={isOpen} withCloseButton={false} onClose={handleCloseModal} size='full' centered>
        <h2>{form.id ? 'Modifier' : 'Ajouter'} témoignage</h2>
        <form action="" onSubmit={submitForm}>
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column'>
              <label htmlFor='prenom'>Prenom : </label>
              <input className='mt-2' onChange={(event) => setForm({...form, prenom: event.target.value}) } name="prenom" type="text" value={form.prenom} placeholder="Prénom" required />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor='nom'>Nom : </label>
              <input className='mt-2' onChange={(event) => setForm({...form, nom: event.target.value}) } name="nom" type="text" value={form.nom} placeholder="Nom" required />
            </div>
          </div>
          <div className='d-flex flex-column mt-2'>
            <label htmlFor='description'>Description : </label>
            <textarea className='mt-2' onChange={(event) => setForm({...form, description: event.target.value}) } name="description" value={form.description} placeholder="Description" required />
          </div>
          <div className='d-fle flex-column'>
            <label htmlFor="imageUrl">Ajouter une image</label>
            <Dropzone
              onDrop={(file) => onImageChange(file)}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }} className="dropzone">
                <div>
                  <Text size="s" inline>
                    Glisser ou importer des images
                  </Text>
                </div>
                <Dropzone.Accept>
                  <GrUploadOption
                    size="3.2rem"
                    color="hsl(357, 96%, 60%)"
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <AiOutlineClose
                    size="3.2rem"
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <GrUploadOption
                    size="3.2rem"
                    className='upload-icon'
                  />
                </Dropzone.Idle>
              </Group>
              {
                form.imageUrl && (
                  <div className='justify-content-center'>
                    <Image maw={240} mx="auto" radius="md" src={form.imageUrl} alt="Random image" />
                  </div>
                )
              }
            </Dropzone>
          </div>
          <div className='d-flex flex-column mt-2'>
            <label htmlFor='imageUrl'>Stars :</label>
            <Rating value={form.stars} onChange={(event) => setForm({...form, stars: event })} />
          </div>
          <div className='mt-2 buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
            <input type="button" value='Annuler' className='btnNoir' onClick={handleCloseModal} />
            <input type="submit" value='Valider' className='btnRouge' />
          </div>
        </form>
      </Modal>
    </>
  )
}
