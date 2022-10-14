import React, {useEffect, useState} from "react";
import Page from "../components/page";
import axios from "axios";
import {useQuery, useQueryClient} from "@tanstack/react-query";



function Discover() {
    const [query, setQuery] = useState('')

    const queryClient = useQueryClient()
    const {data, error, isLoading, isError, isSuccess }= useQuery(
        ['claims', query],
        () => {
            console.log('query = ', query)
            return axios.get('https://endorser.ch:3000/api/claim?claimContents='+query)
        }
    )

    useEffect(() => {
        queryClient.invalidateQueries(['claims'])
    }, [query])

    let entries = isSuccess && data.data
        .filter( entry => entry.claimType === 'JoinAction')
        // .filter( claim => claim['@'] === 'JoinAction')
        // .map( claim => claim.event.name)

    let claims = entries && entries.map( entry => ({ id: entry.id, claim: entry.claim.event.name }) )
return (
    <Page pagename="Discover">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error.message}</div>}
        {isSuccess && (
            <div>
                <ul>
                    {claims.map( ({id, claim}) => (
                        <li key={id}>
                            {claim}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </Page>
)
}

export default Discover;
