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
                    <Image src={uploadImage} width={300} height={300} className='featureImage' alt='upload image'/>
                </div>
                <div className='featureDescription'>
                    <h1>Upload any image and edit</h1>
                    <p> Are you a designer or music creator, share your artistic talents with the world by uploading your original album artwork,
                        remake, edit, fine tune, and do lots more. Showcase your designs alongside established artists,
                        making your mark in the music and art communities.
                    </p>
                </div>
            </div>
            <div className='featureContainer'>
                <div className='featureDescription'>
                    <h1>Download Images in different formats</h1>
                    <p> Save your edited artworks to your device's gallery in different formats or share them directly on social media platforms.
                        You can also use them as wallpaper or profile pictures to show off your musical tastes.
                    </p>
                </div>
                <div className='featureImageContainer'>
                    <Image src={saveImage} width={300} height={300} className='featureImage' alt='save image'/>
                </div>
            </div>
            <div className='featureContainer'>
                <div className='featureImageContainer'>
                    <Image src={editImage} width={300} height={300} className='featureImage' alt='edit image'/>
                </div>
                <div className='featureDescription'>
                    <h1>Edit pictures to your liking!</h1>
                    <p> Unleash your creativity by customizing existing album covers or designing your own.
                        Use a wide range of tools, filters, and effects to give your favorite albums a personal touch.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturesSection