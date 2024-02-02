import asset from "@/json/asset"
import Wrapper from "@/layout/Wrapper/Wrapper"
import { Container, Grid, Typography } from "@mui/material"
import styles from "@/styles/about.module.scss"

const about = () => {
  return (
    <Wrapper>
      <center><Typography sx={{ mt: 10, fontSize: "40px", fontWeight: "bold" }}>About</Typography></center>
      <center><Typography sx={{ fontSize: "20px" }}>We are a small passionate team.</Typography></center>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{my: 3}}>
          <Grid item xs={4} sx={{m: 0}} className={styles.grow}>
            <img src={asset?.person1} alt="" width="300" height={350} style={{borderRadius: "2%", marginTop: "50px"}} />
          </Grid>
          <Grid item xs={4} className={styles.grow}>
            <img src={asset?.person2} alt="" width="300" height={350} style={{borderRadius: "2%"}}/>
          </Grid>
          <Grid item xs={4} className={styles.grow}>
            <img src={asset?.person3} alt="" width="300" height={350} style={{borderRadius: "2%", marginTop: "50px"}}/>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "20px", margin: "auto", textAlign: "center" }}>We provide real-time connectivity to enable software providers and financial institutions to build integrated products for their small business customers.</Typography>
      </Container>
      

    </Wrapper>
  )
}

export default about