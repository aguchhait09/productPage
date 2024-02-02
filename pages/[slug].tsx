import endpoints from "@/api/endpoints.config";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { axiosInstance } from "@/service";
import { Root, Root2, Root3 } from "@/typescript/common.all.interface";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router"

const SingleProduct = () => {
    const router = useRouter()
    // console.log(router);

    const { slug } = router?.query
    console.log('id', slug);

    const { isPending, error, data } = useQuery({
        queryKey: ['singleProducts', [slug]],
        queryFn: async () => {
            const dta = await axiosInstance.get<Root3>(
                // endpoints.fetchProduct.singleProduct({slug})
                `/products/${slug}`
            )
            console.log('data', dta)
            return dta
        }
    })

    return (
        <>
            <Wrapper>
                <Container maxWidth="sm" sx={{margin: "auto"}}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={data?.data?.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data?.data?.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description: {data?.data?.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: {data?.data?.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success" size="small">Ad to Cart</Button>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions> 
                    </Card>
                </Container>
            </Wrapper>
        </>
    )
}

export default SingleProduct