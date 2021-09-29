import Grid from '@mui/material/Grid';
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";

function NewsCardList() {
    return (
        <Box margin={3}>
            <Grid container spacing={3} justifyContent="space-evenly">
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
                <Grid item xs={4}>
                    <NewsCard/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default NewsCardList;
