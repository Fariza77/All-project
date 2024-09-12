import "./createFormStyle.scss";
import { useEffect, useState } from "react";
import AddImage from "../../assets/icons/addImage.png"



function CreateForm(props) {
    const [form, setForm] = useState({
        author: props.user,
        date: (new Date()).toLocaleDateString(),
        title: "",
        image: "",
        content1: "",
        content2: ""
    })

    function submit(e) {
        e.preventDefault();
    }

    function handleStateForm(e) {
        const { name, value } = e.target;

        if (name !== "image") {
            setForm({ ...form, [name]: value })
        } else {
            // set image properly
        }
    }

    return (
        <div className="blog-create-form-wrapper">
            <form onSubmit={submit}>
                <div className="left">
                    <div className="form-control">
                        <label htmlFor="blog-title">Blog title</label>
                        <input id="blog-title" type="text" placeholder="Blog title" name="title" onChange={handleStateForm} />
                    </div>
                    <div className="form-control">
                        <div className="intro">
                            <label>Author: <span>{form.author.username}</span></label>
                            <label>Date:   <span>{form.date}</span></label>
                        </div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="blog-image">Blog image</label>
                        <div className="nft-image-wrapper">
                            <input id="blog-image" type="file" onChange={handleStateForm} name='image' />
                            <img src={AddImage} alt="" />
                            <small>Upload or drag here</small>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="form-control">
                        <label htmlFor="">Content</label>
                        <textarea name="content1" placeholder="Content" onChange={handleStateForm} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Additional information</label>
                        <textarea name="content2" placeholder="Additional information" onChange={handleStateForm} />
                    </div>
                    <div className="form-control">
                        <button type="submit" className="warning-btn">
                            Create Blog
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;