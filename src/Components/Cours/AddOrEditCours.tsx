import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Modal, Group, Text, Select, Switch, Image } from '@mantine/core'
import { COURSES_TYPES  } from '../../Models/Cours'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { GrUploadOption } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { CoursVM } from '../../viewModels/CoursVM'

export const AddOrEditCours = ({ isOpen , setIsOpen, submitForm, coursToUpdate, handleCloseModal } : { isOpen: boolean, setIsOpen: any, submitForm: any, coursToUpdate?: CoursVM, handleCloseModal: any }) => {

  const [isUpload, setIsUpload] = useState(false)

  const [form, setForm] = useState<any>({
    id: '',
    title: '',
    description: '',
    imageFile: '',
    imageFileId: '',
    courseType: COURSES_TYPES.DANSES,
    price: 0,
    place: '',
    isActive: true
  })

  const handleForm = (event: any) => setForm({...form, [event.target.name] : event.target.value })

  const onImageChange = async (files: any) =>  setForm({...form, imageFile: files[0]})

const onSubmit = (event: any) => {
  event.preventDefault()
  submitForm(form)
  setIsOpen(false)
}

const handleCourseType = (currentCourseType: any) => setForm({...form, courseType : currentCourseType})

  const getCoursesOptions = () => {
    return [
      { label: 'Danses', value: COURSES_TYPES.DANSES },
      { label: 'Fitness', value: COURSES_TYPES.FITNESS }
    ]
  }

  useEffect(() => {
    if(coursToUpdate?.id) {
      setForm({
        id: coursToUpdate?.id,
        title: coursToUpdate?.title,
        description: coursToUpdate.description,
        imageFile: coursToUpdate.imageFile,
        imageFileId: coursToUpdate.imageFileId,
        courseType: coursToUpdate.courseType,
        isActive: coursToUpdate.isActive,
        price: coursToUpdate.price,
        place: coursToUpdate.place
      })
    }
  }, [])
  

  return (
    <>
    <Modal opened={isOpen} withCloseButton={false} onClose={handleCloseModal} size='full' centered>
        <h1>Ajouter/modifier un cours</h1>
        <div>
          <form onSubmit={onSubmit}>
            <div className='d-flex flex-column'>
              <label className='form-label' htmlFor='title'>Titre du cours : </label>
              <input  onChange={handleForm} name="title" type="text" value={form.title} placeholder="Titre du cours" required />
            </div>
            <div className='d-flex flex-column mt-2'>
              <label className='form-label' htmlFor='place'>Lieu de cours : </label>
              <input  onChange={handleForm} name="place" type="text" value={form.place} placeholder="Lieu de cours" required />
            </div>
            <div className='d-flex flex-column mt-2'>
              <label className='form-label' htmlFor='price'>Prix du cours : </label>
              <input onChange={handleForm} name="price" type="number" value={form.price} placeholder="Prix du cours" required />
            </div>
            <div className='d-flex flex-column mt-2'>
              <label className='form-label' htmlFor='description'>Description du cours : </label>
              <textarea  onChange={handleForm} name="description" value={form.description} placeholder="Description du cours" required />
            </div>
            <div className='mt-2'>
              <label className='form-label' htmlFor="recurrence">Type de cours :</label>
              <Select
                value={form.courseType}
                allowDeselect={false}
                data={getCoursesOptions()}
                withAsterisk
                onChange={handleCourseType}
              />
            </div>
            <div className='mt-4'>
              {!isUpload &&
                <Dropzone
                  onDrop={(file) => onImageChange(file)}
                  onReject={(files) => console.log('rejected files', files)}
                  maxSize={5 * 1024 ** 5}
                  accept={IMAGE_MIME_TYPE}
                >
                  <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }} className="dropzone">
                    <div>
                      <Text size="s" inline>
                        Glisser ou importer une image de fond
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
                        form.imageFile && (
                          <div className='justify-content-center'>
                            <Image maw={240} mx="auto" radius="md" src={form.imageFile.fileUrl ?? URL.createObjectURL(form.imageFile)} alt="Random image" />
                          </div>
                        )
                      }
                </Dropzone>
              }
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              {
                coursToUpdate &&
                <>
                  <Switch
                    onChange={() => setForm((prev: any) => ({ ...prev, isActive: !form.isActive }))}
                    checked={!form.isActive}
                    label="Archiver cours ?"
                    size="md"
                    onLabel="Non"
                    offLabel="Oui"
                    radius="md"
                    color="dark"
                  />
                </>
              }
            </div>
            <div className='mt-2 d-flex justify-content-end'>
              <button type='submit' className='bg-dark text-white'>
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
    </Modal>
    </>
  )
}
