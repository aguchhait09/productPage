import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


interface wrapperProps {
    children: React.ReactNode
}

const Wrapper = (props: wrapperProps)=>{
    const {children} = props
    return (
        <>
        <Header/>
        <main style={{height: 'auto'}}>
        <Box className="body_content">{children}</Box>
        </main>
        {/* <Footer/> */}
        </>
    )

}

export default Wrapper