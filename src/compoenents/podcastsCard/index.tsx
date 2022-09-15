import {Card, CardContent, SelectChangeEvent} from '@mui/material';
import * as React from 'react';
import {useEffect, useRef} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './podcastsCard.css';
import CardMedia from '@mui/material/CardMedia';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchPodcasts} from "../../store/podcasts";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';

function PodcastsCard() {
    // Set podcast data
    const accidentalTechPodcast = useAppSelector(state => state.podcasts.accidentalTechPodcast);
    const accidentalTechPodcastRef = useRef(accidentalTechPodcast);
    const dispatch = useAppDispatch();

    // Update podcasts from api
    useEffect(() => {
        dispatch(fetchPodcasts());
    }, [accidentalTechPodcastRef]);

    // Handle select
    const [select, setSelect] = React.useState('0');
    const handleChange = (event: SelectChangeEvent) => {
      setSelect(event.target.value);
    };

    const theme = useTheme();

    // Play audio function
    const [accidentalTechPodcastAudio] = React.useState(new Audio(accidentalTechPodcast.link));
    const [isPlaying, setIsPlaying] = React.useState(false);
    const playAudio = () => {
        if (isPlaying) {
            accidentalTechPodcastAudio.pause();
        } else {
            accidentalTechPodcastAudio.play();
        }
        setIsPlaying(!isPlaying);
    }
    const playOrPause = () => {
        if (isPlaying) {
            return <PauseIcon sx={{ height: 38, width: 38 }} />
        } else {
            return <PlayArrowIcon sx={{ height: 38, width: 38 }} />;
        }
    }

    return (
        <Card className="podcasts">
            <CardContent className="cardContent">
                <FormControl variant="standard" sx={{ minWidth: 460 }}>
                    {/*<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>*/}
                    <Select
                        value={select}
                        onChange={handleChange}
                        className="selector"
                    >
                        <MenuItem value={0}>Ten</MenuItem>
                        <MenuItem value={1}>Twenty</MenuItem>
                        <MenuItem value={2}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>

            <Card className="audioPlayCard" sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={accidentalTechPodcast.image}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {accidentalTechPodcast.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Accidental Tech
                        </Typography>
                    </CardContent>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause" onClick={playAudio}>
                            {playOrPause()}
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>

            </Card>
        </Card>
    )
}

export default PodcastsCard;