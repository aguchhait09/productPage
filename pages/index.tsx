import asset from "@/json/asset";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { Avatar, Container, Grid, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import styles from "@/styles/about.module.scss"
import { products } from "@/api/apiCall";
import { useEffect } from "react";

import { axiosInstance } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { Root, Root2 } from "@/typescript/common.all.interface";
import endpoints from "@/api/endpoints.config";


export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const dta = await axiosInstance.get<Root>(
        endpoints.fetchProduct.products
      )
      console.log('data', dta)
      return dta
    }
  })




  return (
    <Wrapper>
      <Container sx={{ my: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            isPending ? (
              <>
                <Grid item xs={6}>
                  <Skeleton variant="rectangular" width={500} height={400} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={300} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Grid>
                <Grid item xs={6}>
                  <Skeleton variant="rectangular" width={500} height={400} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={500} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6} className={styles.grow}>
                  <Link href={`/${data?.data[0]?.id}`}><img src={data?.data[0].image} alt="" width="500" height="400" style={{ borderRadius: "2%" }} /></Link>
                  <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "15px" }}>{data?.data[0].category?.toUpperCase()}</Typography></Link>
                  <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "20px", color: "black", mr: 2 }}>{data?.data[0].title}</Typography></Link>
                  <div><Link href=""><Avatar alt="Remy Sharp" src={asset?.home_avatar1} sx={{ float: "left" }} /> <Typography variant="body2" color="text.secondary" sx={{ float: "right", mr: 35, mt: 2 }}>Mario Sanchez October 21, 2022</Typography>
                  </Link></div>
                </Grid>
                <Grid item xs={6} className={styles.grow}>
                <Link href={`/${data?.data[1]?.id}`}><img src={data?.data[1].image} alt="" width="500" height="400" style={{ borderRadius: "2%" }} /></Link>
                  <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "15px" }}>{data?.data[1].category?.toUpperCase()}</Typography></Link>
                  <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "20px", color: "black", mr: 2 }}>{data?.data[1].title}</Typography></Link>
                  <div style={{ display: "flex" }}><Link href=""><Avatar alt="Remy Sharp" src={asset?.home_avatar1} sx={{ float: "left" }} /> <Typography variant="body2" color="text.secondary" sx={{ float: "right", mr: 35, mt: 2 }}>Mario Sanchez October 21, 2022</Typography>
                  </Link></div>
                </Grid>
              </>
            )
          }
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            isPending ? (
              <>
                <Grid item xs={4} sx={{mt: 5}}>
                  <Skeleton variant="rectangular" width={300} height={350} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={300} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                  <Skeleton variant="rectangular" width={300} height={350} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={300} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                  <Skeleton variant="rectangular" width={300} height={350} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={300} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Grid>
              </>
            ) : (
              <>
                {
                  data?.data?.slice(2).map((item, key) => {
                    return (
                      <>
                        <Grid item xs={4} sx={{ mt: 5 }} className={styles.grow} key={key}>
                          <Link href={`/${item?.id}`}><img src={item?.image} alt="" width={300} height={350} style={{ borderRadius: "2%" }} /></Link>
                          <div style={{ display: "flex" }}><Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#8F00FF" }}>{item?.category?.toUpperCase()}</Typography></Link>
                            <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "12px", fontWeight: "bold", ml: 3 }}>Price: ${item?.price}</Typography></Link>
                          </div>
                          <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "15px", color: "black", mr: 5, fontWeight: "bold" }}>{item?.title}</Typography></Link>
                          <div style={{ display: "flex" }}><Link href=""><Avatar alt="Remy Sharp" src={asset?.home_avatar1} sx={{ float: "left" }} /> <Typography variant="body2" color="text.secondary" >Mario Sanchez  October 21, 2022</Typography>
                          </Link></div>
                        </Grid>
                      </>
                    )
                  })
                }
              </>
            )
          }
          {/* <Grid item xs={4} sx={{ mt: 5 }} className={styles.grow}>
            <img src={asset?.home3} alt="" width={300} height={350} style={{ borderRadius: "2%" }} />
            <div style={{ display: "flex" }}><Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#8F00FF" }}>LIFESTYLE</Typography></Link>
              <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "12px", fontWeight: "bold", ml: 3 }}>PERSONAL GROWTH</Typography></Link>
            </div>
            <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "15px", color: "black", mr: 5, fontWeight: "bold" }}>Every Next Level of Your Life Will Demand a Different You</Typography></Link>
            <div style={{ display: "flex" }}><Link href=""><Avatar alt="Remy Sharp" src={asset?.home_avatar1} sx={{ float: "left" }} /> <Typography variant="body2" color="text.secondary" >Mario Sanchez  October 21, 2022</Typography>
            </Link></div>
          </Grid>
          <Grid item xs={4} sx={{ mt: 5 }} className={styles.grow}>
            <img src={asset?.home4} alt="" width={300} height={350} style={{ borderRadius: "2%" }} />
            <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#FFA500" }}>TRAVEL</Typography></Link>
            <Link href="/technology" style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "15px", color: "black", mr: 5, fontWeight: "bold" }}>This Bread Pudding Will Give You All the Fall Feels</Typography></Link>
            <div style={{ display: "flex" }}><Link href=""><Avatar alt="Remy Sharp" src={asset?.home_avatar1} sx={{ float: "left" }} /> <Typography variant="body2" color="text.secondary" >Mario Sanchez  October 21, 2022</Typography>
            </Link></div>
          </Grid> */}
        </Grid>
      </Container>
    </Wrapper>
  );
}
