import React, { useEffect, useState } from "react";
import './prayerTimes.css'


const PrayerTimes = () => {
    const [praytimes, setPrayTimes] = useState([]);
    const [corrdinates, setCoordinates] = useState([]);
    const tDate = new Date("DD-MM-YYYY")

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [entry, setEntry] = useState(false);


    useEffect(() => {
        getPrayTimes();
    }, []);

    const getPrayTimes = async () => {
        const response = await fetch("http://api.aladhan.com/v1/timings/" + { tDate } + "?latitude=37.648680&longitude=-77.727670&method=0")
        const data = await response.json();
        setPrayTimes([data]);
    };

    const StanderedTime = (time) => {
        let stime = time.split(':')
        let atime = stime[0] - 12 + ":" + stime[1]
        return atime
    }

    const getCoordinates = async (e) => {

        e.preventDefault()

        await fetch("https://api.myptv.com/geocoding/v1/locations/by-address?country=United%20States&state=" + state + "&locality=" + city, {
            method: "GET",
            headers: { apiKey: "NDIwYzRhOTNhOGY2NDc3YjljZGM2M2MyNTJkOTkwODk6N2YxZmQ5NmEtOTU1My00YzYwLWEzMjQtZGY4ZTA1NjJiMzM3", "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then((result) => {
                if (city !== "" && state !== "") {
                    if (result.locations[0].quality.totalScore === 100) {
                        setCoordinates(result)
                        getPrayTimesAdd(result.locations[0].referencePosition.latitude, result.locations[0].referencePosition.longitude)
                    }
                }
                else {
                    setEntry(true)
                    setTimeout(function () {
                        setEntry(false)
                    }, 5000)
                }
            }
            ).catch(err =>
                setEntry(true),
                setTimeout(function () {
                    setEntry(false)
                }, 5000));
    }

    const getPrayTimesAdd = async (lat, long) => {
        const response = await fetch("http://api.aladhan.com/v1/timings/" + { tDate } + "?latitude=" + lat + "&longitude=" + long + "&method=0")
        const data = await response.json();
        setPrayTimes([data]);

        console.log(praytimes)
    };

    return (
        <div >
            <div >
                <div className="main-container">
                    {praytimes ?
                        praytimes.map((time) => (
                            <div className="prayer-times">                              
                                <div className="prayingBox">
                                    <div className="titleBox">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5624f8eee4b0d232542ead5b/1474290009852-KAAEK193TG236ALIDKQ2/image-asset.jpeg" className="banner-img" alt="Fajir banner"/>
                                        <div className="time-box">
                                            <h1>Fajir</h1>
                                            <h1>{time.data.timings.Fajr >= "13:00" ? StanderedTime(time.data.timings.Fajr) + " PM" : time.data.timings.Fajr + " AM"}</h1>
                                        </div>
                                    </div>
                                    <div className="titleBox">
                                        <img src="https://img.freepik.com/free-vector/gradient-beach-sunset-landscape-background_52683-64263.jpg?w=2000&t=st=1663150046~exp=1663150646~hmac=838fad949862e4d5d95aa790b9741e5e1e0cdcbdc20b3ebdf29742913d0507b2" className="banner-img" alt="Dhuhr banner" />
                                        <div className="time-box">
                                            <h1>Dhuhr</h1>
                                            <h1>{time.data.timings.Dhuhr >= "13:00" ? StanderedTime(time.data.timings.Dhuhr) + " PM" : time.data.timings.Dhuhr + " AM"}</h1>
                                        </div>
                                    </div>
                                    <div className="titleBox">
                                        <img src="https://islamcan.com/blog/wp-content/uploads/2019/12/how-to-wake-up-fajr.jpg" className="banner-img" alt="Asr banner" />
                                        <div className="time-box">
                                            <h1>Asr</h1>
                                            <h1>{time.data.timings.Asr >= "13:00" ? StanderedTime(time.data.timings.Asr) + " PM" : time.data.timings.Asr + " AM"}</h1>
                                        </div>
                                    </div>
                                    <div className="titleBox">
                                        <img src="https://islamcan.com/blog/wp-content/uploads/2019/12/how-to-wake-up-fajr.jpg" className="banner-img" alt="Maghrib banner" />
                                        <div className="time-box">
                                            <h1>Maghrib</h1>
                                            <h1>{time.data.timings.Maghrib >= "13:00" ? StanderedTime(time.data.timings.Maghrib) + " PM" : time.data.timings.Maghrib + " AM"}</h1>
                                        </div>
                                    </div>

                                    <div className="titleBox">
                                        <img src="https://islamcan.com/blog/wp-content/uploads/2019/12/how-to-wake-up-fajr.jpg" className="banner-img" alt="Isha banner"/>
                                        <div className="time-box">
                                            <h1>Isha</h1>
                                            <h1>{time.data.timings.Isha >= "13:00" ? StanderedTime(time.data.timings.Isha) + " PM" : time.data.timings.Isha + " AM"}</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                        :
                        <h1>Prayer Times Not Available at the Moment</h1>
                    }
                </div>
                <div className="prayer-title">
                                    {corrdinates.locations ?
                                        <div>
                                            <p>location: {corrdinates.locations[0].address.city + ", " + corrdinates.locations[0].address.state + ", " + corrdinates.locations[0].address.countryName}</p>
                                        </div>
                                        :
                                        <div>
                                            {entry && <p style={{ background: "red", color: "white" }}>Not Valid Location Entered</p>}
                                            <p>Location: Zahra foundation</p>
                                            <p>Address: 963 Manakin Rd, Manakin Sabot, VA</p>
                                        </div>
                                    }
                                    <p>Note: Prayer Times are provided by Leva Institute, Qum</p>
                                </div>
                <div className="city-form">
                    <p>Want to see praying time in different city?</p>
                    <form  onSubmit={(e) => getCoordinates(e)}>
                        <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City"></input>
                        <input onChange={(e) => setState(e.target.value)} type="text" placeholder="State"></input>
                        <button >Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PrayerTimes;