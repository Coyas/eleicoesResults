import PieGraph from './pie'
// import  getEleicoes  from "../pages/api/eleicoes";
import Head from "next/head";
var xlsx = require('json-as-xlsx')

var parser = require('fast-xml-parser');


const Index = ({dados}) => {   

    // console.log("dados da nosi api")
    // console.log(dados)
    let jsonObj;
    let res;
    try{
        jsonObj = parser.parse(dados);

        // console.log("jsonObj lista")
        // console.log(jsonObj.result.conteudo)

        res = JSON.parse(jsonObj.result.conteudo); 

        // console.log("string to json")
        // console.log(res)
        // console.log(res.mesa[0].desc_circulo)
        // console.log(res.mesa[0].partidos[0])

    }catch(error){
        console.log(error.message)
    }

    // let cor

    
    var columns = [
        { label: 'Mesa', value: 'mesa' }, // Top level data
        { label: 'Apurado', value: 'apurado' },
        { label: 'Local Votos', value: 'local_voto' },
        { label: 'Zona', value: 'zona' },
        { label: 'Posto', value: 'posto' },
        { label: 'Concelho', value: 'concelho' },
        { label: 'Desc Circulo', value: 'desc_circulo' },
        { label: 'Total Votantes', value: 'total_votantes' },
        { label: 'Total Inscritos', value: 'total_inscritos' },
        { label: 'Votos Brancos', value: 'votos_brancos' },
        { label: 'Votos Validos', value: 'votos_validos' },
        { label: 'Votos Nulos', value: 'votos_nulos' },
        { label: 'Votos Protestados', value: 'votos_protestados' },
        { label: 'Partido', value: 'sigla' },
        { label: 'Total De Votos', value: 'total_votos' }
        
    ]
    

    let content = [];
    let sigla = [];
    let cor = [];
    res.mesa.forEach((element) => {
        console.log(element)
        element.partidos.forEach((dados) => {
            content.push({mesa: element.mesa, apurado: element.apurado, local_voto: element.local_voto, zona: element.zona, posto: element.posto, concelho: element.concelho, desc_circulo: element.desc_circulo, total_votantes: element.total_votantes, total_inscritos: element.total_inscritos, votos_brancos: element.votos_brancos, votos_validos: element.votos_validos, votos_nulos: element.votos_nulos, votos_protestados: element.votos_protestados, sigla: dados.sigla, total_votos: dados.total_votos})
        });
        
    });
        
        var settings = {
            sheetName: 'First sheet', // The name of the sheet
            fileName: 'Elecoes2020', // The name of the spreadsheet
            extraLength: 3, // A bigger number means that columns should be wider
            writeOptions: {} // Style options from https://github.com/SheetJS/sheetjs#writing-options
        }
        
        var download = true // If true will download the xlsx file, otherwise will return a buffer
        
        xlsx(columns, content, settings, download) // Will download the excel file
        
    // const muni = [];

    // res.mesa.forEach((element) => {
    //     console.log(element)
    //     element.partidos.forEach((dados) => {
    //         content.push({mesa: element.mesa, apurado: element.apurado, local_votos: element.local_votos, desc_circulo: element.desc_circulo, total_votantes: element.total_votantes, total_inscritos: element.total_inscritos, votos_nulos: element.votos_nulos, sigla: dados.sigla, total_votos: dados.total_votos})
    //     });
    // });

    const municipio = {
        id: "5555",
        desc_circulo: "qdsdqd",
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                data: [50, 50, 100],
                backgroundColor: [
                '#00FF00',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#00FF00',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }

    }

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

        <header>
            <nav className="navbar bg-danger text-white">
                <span className="navbar-brand mb-0 h1">Eleições Autárquicas 2020-2021</span>
            </nav>
        </header>

        <main >
            <PieGraph dados={municipio}/>
        </main>
    </>
    )
}

export async function getServerSideProps(context) {

    const token = "a81b5bbc-fca7-3990-b4ba-37246d3053dc";
    // https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable
    const url = `https://api-pdex.gov.cv:8242/t/eleicoes.gov/ElectionDataCollectorAPIPP/1.0.0/_postelectionresultbytable`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            _postelectionresultbytable: {
                candidaturaType: "1"
            }
        })
    });

    // console.log("response")
    // console.log(res)

    // const dados = await res.json();
    const dados = await res.text();
    // console.log(dados)
    
    return { props: { dados } }
}

export default Index