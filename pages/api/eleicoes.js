import fetch from "isomorphic-unfetch";


const getEleicoes = () => {
    // try {
    // console.log("req:");
    // console.log(req);
    const token = "305613b9-a411-31bf-8352-b2a94bb2f8a3";
    // https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable
    const url = `https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token,
        }
    });
}

export default getEleicoes