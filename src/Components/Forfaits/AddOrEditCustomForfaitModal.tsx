import React, { useState } from 'react'
import { Modal, Group, Button, Select, Checkbox, Text , Image} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE, DropzoneProps } from '@mantine/dropzone'
import { uploadFile } from '../../Controllers/file'
import { GrUploadOption } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { Forfait } from '../../Models/Forfait'

const AddOrEditCustomForfaitModal = ({ isOpen, setIsOpen, submitForm } : { isOpen : boolean , setIsOpen: React.Dispatch<React.SetStateAction<boolean>> , submitForm: any}) => {

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

  return (
    <>
      <Modal opened={isOpen} withCloseButton={false} onClose={() => setIsOpen(false)} size='full' centered>
        <div>
          <h1>Ajouter un forfait personalisés</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className='col-lg-7 d-flex flex-column'>
                <div className='d-flex flex-column'>
                  <label htmlFor="nomDuForfait">Nom du forfait : </label>
                  <input className='mt-2' onChange={(titleItem) => setForm({...form, title: titleItem.target.value })} value={form.title} name='nomDuForfait' type="text" placeholder="Nom du forfait" required />
                </div>
                <div className='d-flex flex-column mt-2'>
                  <label htmlFor="price">Tarif : </label>
                  <input className='mt-2' onChange={(priceItem) => setForm({...form, price: priceItem.target.value })} value={form.price} name='price' type="number" placeholder="Prix du forfait" required />
                </div>
                <div className='d-flex flex-row mt-2' style={{
                  gap: '20px'
                }}>
                  <Select
                    onChange={(customerTypeItem) => setForm({...form, customerType: customerTypeItem})}
                    placeholder="Type de client"
                    data={[
                      { value: 'allPublic', label: 'Tout public' },
                      { value: 'kids', label: 'Enfants' },
                      { value: 'adults', label: 'Adultes' },
                      { value: 'parentsAndKids', label: 'Parents et enfants' },
                    ]}
                  />
                  <Select
                    placeholder="Catégorie"
                    onChange={(categoryItem) => setForm({...form, category: categoryItem})}
                    data={[
                      { value: 'danse', label: 'Danses' },
                      { value: 'fitnessAndComfort', label: 'Fitness et bien être' },
                    ]}
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
                  onChange={(courses) => setForm({...form, associatedCourses: courses})}
                >
                  <Group mt="xs" noWrap>
                    <Checkbox value='zumba' label="Zumba" />
                    <Checkbox value='kuduroFit' label="Kuduro Fit" />
                    <Checkbox value='strongNation' label="Strong Nation" />
                    <Checkbox value='hiit' label="Hiit" />
                    <Checkbox value='portDeBras' label="Port de bras" />
                    <Checkbox value='renforcement' label="Renforcement" />
                  </Group>
                </Checkbox.Group>
              </div>
            </div>

            <div className='mt-2 buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
              <input type="button" value='Annuler' className='btnNoir' onClick={handleCloseModal} />
              <input type="submit" value='Valider' className='btnRouge' />
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default AddOrEditCustomForfaitModal