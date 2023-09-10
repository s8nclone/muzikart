import Image from 'next/image'
import React from 'react'
import uploadImage from 'public/images/upload-image.webp'
import saveImage from 'public/images/save-image.webp'
import editImage from 'public/images/edit-image.jpg'

function FeaturesSection() {
  return (
    <>
        <section className='featureSection'>
            <div className='featureContainer'>
                <div className='featureImageContainer'>
                    <Image src={uploadImage} width={300} height={300} className='featureImage'/>
                </div>
                <div className='featureDescription'>
                    <h1>Upload any image and edit</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi accusamus enim similique dolorem! Quas tempora dolores rem voluptate 
                        facilis adipisci nemo recusandae aperiam dolorum ducimus ad labore quia, veniam beatae?
                    </p>
                </div>
            </div>
            <div className='featureContainer'>
                <div className='featureDescription'>
                    <h1>Download Images in different formats</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi porro blanditiis, voluptate, asperiores nesciunt tempore vero
                        aperiam ipsam iure explicabo mollitia voluptas hic voluptatum qui quaerat libero atque.
                        Maiores, dolorem.
                    </p>
                </div>
                <div className='featureImageContainer'>
                    <Image src={saveImage} width={300} height={300} className='featureImage'/>
                </div>
            </div>
            <div className='featureContainer'>
                <div className='featureImageContainer'>
                    <Image src={editImage} width={300} height={300} className='featureImage'/>
                </div>
                <div className='featureDescription'>
                    <h1>Edit pictures to your liking!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Nam, neque, distinctio ab voluptatum quos eius molestias, quo quasi rerum deleniti 
                        tempore possimus laudantium sapiente quidem. Porro quae quia provident explicabo!
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturesSection