import Image from "next/image";

const Photos = () =>{
    const images = [
        '/mary.jpeg',
        '/IMG_5164.jpeg'
    ]
    return (
        <>
        <div className="flex justify-between">
            {images.map((image,key)=>{ return (
                <Image src={image} alt={image} width={144} height={240} key={key}/>
            )} )}
        </div>
        </>
    )
}

export default Photos;