import React from 'react'

const ImageGallary = () => {

  const images = import.meta.glob('../assets/Images/*.{png,jpg,jpeg,svg}', { eager: true });

  const imageUrls = Object.values(images).map((mod) => mod.default);
  let imageIndex = []
  for (let i = 1; i <= imageUrls.length; i++) {
    imageIndex.push(i)
  }      
  console.log(imageIndex[0])
  return (
    <div className='w-[70vw] relative left-[15%] -top-50 z-10'>
      <div className='flex flex-wrap'>
      {imageUrls.map((img,index)=>(
        <div className='overflow-hidden'>
        <img 
        loading='lazy'
        className={`h-[70vh] w-[35vw] object-cover transition-transform duration-300 ease-in-out hover:scale-120
        `} key={imageIndex[index]} src={img} alt="" />
        {/* ${index === 1 || index ===4 ? "h-[70vh]":""} */}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ImageGallary