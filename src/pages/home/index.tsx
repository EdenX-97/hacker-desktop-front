import * as React from 'react';
import './Home.css';
import NewsCard from '../../compoenents/newsCard';
import Grid from '@mui/material/Unstable_Grid2';
import PodcastsCard from "../../compoenents/podcastsCard";

function Home() {
    return (
        <Grid className="Home" container spacing={4} >
            <Grid display="flex" justifyContent="center" xs={5}>
                <NewsCard/>
            </Grid>
            <Grid display="flex" justifyContent="center" xs={4}>
                {/*<NewsCard/>*/}
            </Grid>
            <Grid display="flex" justifyContent="center" xs={3}>
                {/*<NewsCard/>*/}
            </Grid>
            <Grid display="flex" justifyContent="center" xs={5}>
                <PodcastsCard />
            </Grid>
            <Grid display="flex" justifyContent="center" xs={4}>
                {/*<NewsCard/>*/}
            </Grid>
            <Grid display="flex" justifyContent="center" xs={3}>
                {/*<NewsCard/>*/}
            </Grid>
        </Grid>
    );
}

export default Home;