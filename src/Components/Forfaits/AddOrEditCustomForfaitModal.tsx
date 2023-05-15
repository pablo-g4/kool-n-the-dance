import React, { useState, useEffect } from 'react'
import { Modal, Group, Switch, Select, Checkbox, Text , Image} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { uploadFile } from '../../Controllers/file'
import { GrUploadOption } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { Forfait } from '../../Models/Forfait'
import _ from 'lodash'
import { COURSES_TYPE } from '../../Models/Forfait'

const AddOrEditCustomForfaitModal = ({ isOpen, setIsOpen, submitForm, currentCustomForfait, closeAddOrEditCustomForfaitModal } : { isOpen : boolean , setIsOpen: React.Dispatch<React.SetStateAction<boolean>> , submitForm: any, currentCustomForfait ?: Forfait, closeAddOrEditCustomForfaitModal?: any}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [form, setForm] = useState<any>({
    id: '',
    title: '',
    description: '',
    price: 0,
    customerType: '',
    category: '',
    imageUrl: '',
    associatedCourses: [],
    isBasic: false,
    isActive: true,
  })

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const newCustomForfait = new Forfait()
    newCustomForfait.title = form.title
    newCustomForfait.price = form.price
    newCustomForfait.customerType = form.customerType
    newCustomForfait.category = form.category
    newCustomForfait.imageUrl = form.imageUrl
    newCustomForfait.isBasic = form.isBasic
    newCustomForfait.associatedCourses = form.associatedCourses

    if(form.id) {
      newCustomForfait.id = form.id
      newCustomForfait.isActive = form.isActive
    } 

    submitForm(newCustomForfait)
    handleCloseModal()
  }

  const onImageChange = async (files: any) => {
    const uploadedImageUrl = await uploadFile(files[0], "images");
    setForm({ ...form, imageUrl: uploadedImageUrl })
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsLoading(true)
    if(currentCustomForfait?.id) {
      setForm(currentCustomForfait)
    } 
    setIsLoading(false)
  }, [currentCustomForfait])

  return (
    <>
      {
        !isLoading ? (
          <Modal opened={isOpen} withCloseButton={false} onClose={closeAddOrEditCustomForfaitModal} size='full' centered>
            <div>
              <h1>Ajouter un forfait personalisés</h1>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className='col-lg-7 d-flex flex-column'>
                    <div className='d-flex flex-column'>
                      <label htmlFor="nomDuForfait">Nom du forfait : </label>
                      <input className='mt-2' onChange={(titleItem) => setForm({ ...form, title: titleItem.target.value })} value={form.title} name='nomDuForfait' type="text" placeholder="Nom du forfait" required />
                    </div>
                    <div className='d-flex flex-column mt-2'>
                      <label htmlFor="price">Tarif : </label>
                      <input className='mt-2' onChange={(priceItem) => setForm({ ...form, price: priceItem.target.value })} value={form.price} name='price' type="number" placeholder="Prix du forfait" required />
                    </div>
                    <div className='d-flex flex-row mt-2' style={{
                      gap: '20px'
                    }}>
                      <Select
                        required
                        onChange={(customerTypeItem) => setForm({ ...form, customerType: customerTypeItem })}
                        placeholder="Type de client"
                        value={form.customerType}
                        data={['Tout public', 'Enfants', 'Adultes', 'Parents et enfants']}
                      />

                      <Select
                        required
                        onChange={(categoryItem) =>  setForm({ ...form, category: categoryItem })}
                        placeholder="Catégorie"
                        value={form.category}
                        data={['Danses',  'Fitness et bien être']}
                      />
                    </div>
                  </div>
                  <div className='col-lg-5'>
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
                </div>
                <div className='mt-2'>
                  <h3>Selectionner le(s) cours</h3>
                  <div className='d-flex flex-row' style={{
                    gap: '20px'
                  }}>
                    <Checkbox.Group
                      onChange={(courses) => setForm({ ...form, associatedCourses: courses })}
                      value={form.associatedCourses}
                    >
                      <Group mt="xs" noWrap>
                        {
                          COURSES_TYPE && _.map(COURSES_TYPE, (COURSE) => (
                            <Checkbox value={COURSE} label={COURSE} />
                          ))
                        }
                      </Group>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                  {
                    currentCustomForfait &&
                    <>
                      <Switch
                        onChange={() => setForm((prev: any) => ({ ...prev, isActive: !form.isActive }))}
                        checked={!form.isActive}
                        label="Archiver forfait ?"
                        size="md"
                        onLabel="Non"
                        offLabel="Oui"
                        radius="md"
                        color="dark"
                      />
                    </>
                  }
                </div>

                <div className='mt-2 buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
                  <input type="button" value='Annuler' className='btnNoir' onClick={closeAddOrEditCustomForfaitModal} />
                  <input type="submit" value='Valider' className='btnRouge' />
                </div>
              </form>
            </div>
          </Modal>
        ) : 'Loading'
      }

    </>
  )
}

export default AddOrEditCustomForfaitModal