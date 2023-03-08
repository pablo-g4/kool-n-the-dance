import React from 'react'

const Posts = () => {
  return (
    <form>
      <div className="form-group">
        <label className="">Titre</label>
        <input type="text" className="form-control" id="#" placeholder="Entrez le titre de votre post" />
      </div>
      <div className="form-group">
        <label className="">Description</label>
        <input type="text" className="form-control" id="#" placeholder="Enrtez la description de votre article" />
      </div>
      <div className="mb-3">
        <label className="form-label">Multiple files input example</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label">
          Checked checkbox
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Posts