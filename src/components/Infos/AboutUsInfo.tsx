import { Box, Grid, Typography } from '@mui/material'


export default function AbousUsInfo() {
  return (

        <Box sx={{ maxWidth: '100%', margin: '0 auto', mb: 8, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
         {/*  <Box
            sx={{

              backgroundImage: 'url("https://d2l4159s3q6ni.cloudfront.net/resize/1280x146/filters:max_age(2604800):quality(65):format(webp)/s3/dam/photos/5f/4a/07/d3/489bc28eb0fd683bdb392f7cc3284df410bd2c38ee1cf24206748b68.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '110px',
              width: '50%',
              margin: '0',

            }}
          /> */}

          <Grid container spacing={2} sx={{width:'50%', display:'flex', justifyContent:'center'}}>
            <Typography variant="h5" sx={{ color: '#333', marginBottom: '1rem', mt: 10, fontWeight:400 }}>
              TravelTO, tu agencia de viajes on-line
            </Typography>
            <Typography variant="body1" paragraph sx={{fontWeight:300 }}>
              Descubre los paraísos tropicales del Caribe, la exclusividad de las islas de Bali, la tranquilidad de los destinos remotos en las Seychelles. Explora los rincones secretos de nuestras costas peninsulares y islas, sumérgete en la aventura de destinos inexplorados en África, vive la emoción en los parques temáticos más emocionantes, navega hacia destinos exóticos en un lujoso crucero... ¡TravelTO está aquí para ofrecerte una experiencia única!
            </Typography >
            <Typography variant="body1" paragraph sx={{fontWeight:300 }}>
              Nos esforzamos para que cada viaje que hagas con nosotros sea inolvidable. Con una amplia gama de ofertas, encontrarás lo que buscas al mejor precio. Ofrecemos emocionantes recorridos por Europa, viajes épicos a Asia, América y África, además de vuelos económicos y los mejores alojamientos en las principales ciudades del mundo, como Tokio, Sydney, Nueva York, Buenos Aires, y más.
            </Typography>
            <Typography variant="body1" sx={{fontWeight:300 }}>
              Te brindamos la oportunidad de disfrutar del verano en las impresionantes playas peninsulares, en las Islas Canarias y Baleares, ¡con las tarifas más competitivas! Y no podemos olvidar el encanto del Caribe con destinos como Jamaica, Barbados y Bahamas. ¿Aún lo estás pensando? ¡No te pierdas la oportunidad de unas vacaciones de ensueño con TravelTO!
            </Typography>
          </Grid>
        </Box>
   
  )
}
