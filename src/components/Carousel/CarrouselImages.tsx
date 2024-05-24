import Carousel from 'react-material-ui-carousel';
import './CarrouselImages.css';
export default function CarrouselImages() {

    const images: string[] = [

        'https://uploads-ssl.webflow.com/62272387f8c2db04921ba1a9/65d33cbca17ce70858ca181d_2000x300%20Banner%20CAM.jpg',
        'https://d2l4159s3q6ni.cloudfront.net/resize/2000x300/filters:max_age(2604800):quality(95):format(webp)/s3/dam/photos/02/6f/0a/a1/08db295720f85911ac09cc76e1bb093c8d5e38828223ef8fe5d339b5.jpg',
        'https://d2l4159s3q6ni.cloudfront.net/resize/2000x300/filters:max_age(2604800):quality(95):format(webp)/s3/dam/photos/1a/ad/bf/9e/f964f4576d3c6673136397f304872e633eb61b45f346a14516f4b0e8.jpg',
        'https://d2l4159s3q6ni.cloudfront.net/resize/1920x300/filters:format(jpeg)/s3/dam/photos/23/c9/e1/bc/de9e647269b045a7f06f107bf3e06f087f7d58068e33b562a53951cd.jpg'
    ]

    return (
        <>
            <Carousel
                autoPlay={false}
                swipe={true}
                indicators={false}
                animation="slide"
                sx={{
                    maxWidth: '100%',
                    height: '400px',
                    display: 'block', 
                    '@media (max-width: 1000px)': { 
                        display: 'none',
                    },
                    '& .imagenes': {
                        width: '100%',
                        objectFit: 'cover',
                    },
                }}
            >
                {images.map((image: string, i: number) => (
                    <img alt='' key={i} src={image} className='imagenes' />
                ))}
            </Carousel>
        </>
    )
}
