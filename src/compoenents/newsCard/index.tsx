import * as React from 'react';
import {useEffect, useRef} from 'react';
import './newsCard.css';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {fetchNewsList} from "../../store/news";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import News from './news';


function NewsCard() {
    // Set news list and dispatch function
    const newsList = useAppSelector(state => state.news.newsList);
    const newsListRef = useRef(newsList);
    const dispatch = useAppDispatch();

    // Update news from api
    useEffect(() => {
        dispatch(fetchNewsList());
    }, [dispatch, newsListRef]);

    // State and function to handle tabs switch
    const [value, setValue] = React.useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Card className="news">
            <CardContent className="cardContent">
                <TabContext value={value}>
                    <TabList onChange={handleChange} variant="scrollable">
                        <Tab label="Hacker News" value="0" />
                        <Tab label="Overflow News" value="1" />
                        <Tab label="InfoQ News" value="2" />
                    </TabList>



                    {/*<TabPanel className="tabPanel" value="0">*/}
                    {/*    {*/}
                    {/*        hackerNewsList.map((data: {title: string; link: string}) => (*/}
                    {/*            <News key={data.title} title={data.title} link={data.link}/>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</TabPanel>*/}

                    {/*<TabPanel className="tabPanel" value="1">*/}
                    {/*    {*/}
                    {/*        overflowNewsList.map((data: {title: string; link: string}) => (*/}
                    {/*            <News key={data.title} title={data.title} link={data.link}/>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</TabPanel>*/}

                    {/*<TabPanel className="tabPanel" value="2">*/}
                    {/*    {*/}
                    {/*        infoQList.map((data: {title: string; link: string}) => (*/}
                    {/*            <News key={data.title} title={data.title} link={data.link}/>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</TabPanel>*/}
                </TabContext>
            </CardContent>
        </Card>
    )
}

export default NewsCard;