import React, {Fragment} from 'react';

const ServiceComponent = () => {
    return (
        <Fragment>
            <section id="serviceWrapper">
                <h1 className="serviceTitle">Image Details Form</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input type="file" id="image" name="image" placeholder="Enter image URL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input id="subtitle" type="text" name="subtitle" placeholder="Enter subtitle"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="showImage" name="showImage"/>
                        <label id="showImageTExt" htmlFor="showImage">Show Image:</label>
                    </div>
                    <button id="serviceSubmit" type="submit">Submit</button>
                </form>
            </section>
        </Fragment>
    );
};

export default ServiceComponent;