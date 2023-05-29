import React, { useEffect, useState } from 'react'
import { Modal, Group, Text } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { GrUploadOption } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import './news.css'
import attachmentIcon from './attach-16.png'
import { NewsVM } from '../../viewModels/NewsVM'

const AddOrEditNewsModal = (
    {
        currentNews,
        submitForm,
        handleCloseModal
    }:
        {
            currentNews?: NewsVM | undefined,
            submitForm?: any,
            handleCloseModal:any
        }) => {

    const [form, setForm] = useState<any>({
        id:'',
        title: '',
        description: '',
        attachedFile: '',
        attachedFileId: '',
        imageFileId: '',
        imageFile: '',
        isActive: true,
    })

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        submitForm(form)
    }
    const handleInput = (event: any) => {
        const key = event.target.name
        const value = event.target.value
        setForm((previousFormValues: any) => ({ ...previousFormValues, [key]: value }));
    }


    const onImageChange = (imageFile: any) => setForm({...form, imageFile: imageFile[0] })

    const onFileChange = (e: any) => setForm({...form, attachedFile: e.target.files[0]})

    useEffect(() => {
        if (currentNews) {
            setForm({
                id: currentNews.id,
                title: currentNews.title,
                description: currentNews.description,
                attachedFile: currentNews.attachedFile,
                attachedFileId: currentNews.attachedFileId,
                imageFileId: currentNews.imageFileId,
                imageFile: currentNews.imageFile,
                isActive: true
            })
        }
    }, [currentNews])

    return (
        <>
            <Modal opened={true} withCloseButton={false} onClose={handleCloseModal} size='full' centered>
                <h1 className='title-modal'> { form.id ? 'Modifier' : 'Ajouter'} un article </h1>
                <div>
                    <div className="row">
                        <form onSubmit={handleSubmit} action='' method=''>
                            <div className="header-div row mb-2">
                                <div className='col-6 mb-3 d-flex flex-column'>
                                    <label className='form-label' htmlFor='titreArticle'>Titre Article : </label>
                                    <input className='mt-2' onChange={handleInput} value={form.title} id="titreArticle" type="text" name='title' placeholder="Titre Article" required />
                                    <label className='btnAjout d-flex flex-column' htmlFor="attachedFile">
                                        <div>
                                            <img src={attachmentIcon} style={{ marginRight: "2%" }} />
                                            <span>
                                                Ajouter une pièce jointe
                                            </span>
                                        </div>
                                        <input className='mt-2' hidden onChange={onFileChange} type="file" id='attachedFile' name='attachedFile' />
                                    </label>
                                    {
                                        form.attachedFile && (<a href={form.attachedFile.fileUrl ?? form.attachedFile.name} target="_blank" >Voir fichier</a>)
                                    }
                                </div>
                                <div className='col-6'>
                                        <Dropzone
                                            onDrop={(file) => onImageChange(file)}
                                            onReject={(files) => console.log('rejected files', files)}
                                            maxSize={5 * 1024 ** 4}
                                            accept={IMAGE_MIME_TYPE}
                                        >
                                            <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }} className="dropzone">
                                                <div>
                                                    <Text size="s" inline>
                                                        Glisser ou importer des images articles.
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
                                        {form.imageFile &&
                                            <img
                                                className='img-preview'
                                                style={{
                                                    marginLeft: "2rem",
                                                    objectFit: "contain",
                                                    maxHeight: "150px",
                                                    maxWidth: "300px"
                                                }}
                                                src={ form.imageFile.fileUrl ?? URL.createObjectURL(form.imageFile)}
                                            >
                                            </img>
                                        }
                                    </Dropzone>
                                </div>
                            </div>
                            <div className='mb-2 d-flex flex-column'>
                                <label className='form-label' htmlFor='description'> Description : </label>
                                <textarea onChange={handleInput} value={form.description} rows={6} cols={79} name='description' maxLength={200} required />
                            </div>

                            <div className='mb-3 text-center d-flex flex-column'>
                                <label className="form-check-label" htmlFor="isActive"> Visible ?</label>
                                <input type="checkbox" id="require" name="isActive" checked={form.isActive} onChange={() => setForm((previousFormValues: any) => ({ ...previousFormValues, isActive: !form.isActive }))} />
                            </div>

                            <div className='buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
                                <input type="button" value='Annuler' className='btnNoir' onClick={handleCloseModal} />
                                <input type="submit" value='Valider' className='btnRouge' />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddOrEditNewsModal