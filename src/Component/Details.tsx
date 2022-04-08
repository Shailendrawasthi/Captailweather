
import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';



const Details = () => {
    let API_KEY = '80b3a297fb887d9058ba106509dd2d03';
    const { state }: any = useLocation();
    const [country, setCountry] = useState<any>("");
    const [weatherData, setWeatherData] = useState<any>("");
    const data = state?.data;
    console.log(data);
    const weatherDetail = async (capital: any) => {
        setCountry(capital);
        const resp = await axios.get
            (`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`);
        setWeatherData(resp.data);
        console.log(resp.data);


    }
    function renderWeatherDetails() {
        return (
            <div>
                <Typography>Weather Information</Typography>
                <div>
                    <div>

                        <img
                            src={weatherData?.current?.weather_icons[0]}
                            alt=""
                        />
                    </div>
                    <div className="weather-info">
                        Temperature
                        <div className="weather-data">
                            {weatherData?.current?.temperature}
                        </div>
                    </div>
                    <div className="weather-info">
                        Wind Speed
                        <div className="weather-data">
                            {weatherData?.current?.wind_speed}
                        </div>
                    </div>
                    <div className="weather-info">
                        Precip
                        <div className="weather-data">
                            {weatherData?.current?.precip}
                        </div>
                    </div>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }}
                        id='go-back' to="/">
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Container>
                <Box>
                    <Typography variant='h4'>Country Details</Typography>
                    {data?.map((item: any) => {
                        return (


                            <div>
                                <img
                                    src={item?.flags.png}
                                    alt={item?.flag}
                                    height="140"
                                    width="200"
                                />
                                <div>
                                    <strong>Capital :-</strong>
                                    {item?.capital}
                                </div>
                                <div>
                                    <strong>Population :-</strong>
                                    {item?.population}
                                </div>
                                <div>
                                    <strong>   Latlng :-</strong>
                                    {item?.capitalInfo.latlng[0]}, {item?.capitalInfo.latlng[1]}
                                </div>
                                <Button id='Weather' onClick={() => weatherDetail(item?.capital)}>Capital Weather</Button>
                                {String(weatherData?.location?.name) === String(item?.capital) && weatherData ? renderWeatherDetails() : null}

                            </div>


                        );
                    })}
                </Box>
            </Container>
        </div>)
};
export default Details;

