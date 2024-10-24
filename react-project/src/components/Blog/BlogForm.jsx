import AddImage from "../../assets/icons/addImage.png"
import { useEffect } from "react";

function BlogForm(props) {
    useEffect(() => {
        console.log(props.form)
    }, [])

    return (
        <form onSubmit={props.submit}>
            <div className="left">
                <div className="form-control">
                    <label htmlFor="blog-title">Blog title</label>
                    <input id="blog-title" type="text" placeholder="Blog title" name="title"
                        onChange={props.handleStateForm} value={props.form.title} />
                </div>
                <div className="form-control">
                    <div className="intro">
                        <label>Author: <span>{props.form.author.username}</span></label>
                        <label>Date:   <span>{props.form.date}</span></label>
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="blog-image">Blog image</label>
                    <div className="nft-image-wrapper">
                        <input id="blog-image" type="file" onChange={props.handleStateForm} name='image' />
                        <img src={AddImage} alt="" />
                        <small>Upload or drag here</small>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="form-control">
                    <label htmlFor="">Content</label>
                    <textarea name="subtitle1" placeholder="Content" onChange={props.handleStateForm} value={props.form.subtitle1} />
                </div>
                <div className="form-control">
                    <label htmlFor="">Additional information</label>
                    <textarea name="subtitle2" placeholder="Additional information" onChange={props.handleStateForm} value={props.form.subtitle2} />
                </div>
                <div className="form-control">
                    <button type="submit" className="warning-btn">
                        {props.submitButtonText} Blog
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BlogForm;