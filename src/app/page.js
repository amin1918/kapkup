
import MainClinetPage from '@/components/pages/home/MainClinetPage'
import axios from 'axios';
import React from 'react'

async function Main() {
    let businesses = [];
    let slug = ""

    try {
        const { data } = await axios.get("https://api.kapkup.com/api/businesses/getAllBusinessesOffers");
        const success = data.data.success;

        if (success) {
            businesses = data.data.data;
            slug = businesses
            

        }
    } catch (error) {
        console.error("API Error:", error);
    }



    return (

        <MainClinetPage  AllBusinesses = {businesses} />

    )
}
export default Main
