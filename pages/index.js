// import PieGraph from './pie'
// import  getEleicoes  from "../pages/api/eleicoes";
import Head from "next/head";


const Index = () => {   

    // console.log("dados da nosi api")
    // console.log(dados)

   
    // const data = {
    //     labels: [
    //         'Red',
    //         'Blue',
    //         'Yellow'
    //     ],
    //     datasets: [{
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ],
    //         hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ]
    //     }]
    // };

    return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Eleições Autárquicas 2020-2021</title>
        </Head>
        <p>ola mundo</p>

        {/* <header>
            <nav className="navbar bg-danger text-white">
                <span className="navbar-brand mb-0 h1">Eleições Autárquicas 2020-2021</span>
            </nav>
        </header>

        <main >
            <PieGraph dados={data}/>
        </main> */}
    </>
    )
}

// export async function getServerSideProps(context) {
    
//     // const response = getEleicoes();
//     // const dados = await response.json();
//     // console.log(dados)

//     // return {
//     //     props: { dados}
//     // };

//     const token = "305613b9-a411-31bf-8352-b2a94bb2f8a3";
//     // https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable
//     const url = `https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable`;
//     const res = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             'Authorization': 'Bearer ' + token,
//         },
//         body: JSON.stringify({
//             _postelectionresultbytable: {
//                 candidaturaType: "(1)CAMARA /(2) ASSEMBLEIA"
//             }
//         })
//     });

//     console.log("response")
//     console.log(res)

//     // const dados = await res.json();
//     const dados = await res.text();
//     console.log(dados)  
    
//     return { props: { dados } }
// }

export default Index