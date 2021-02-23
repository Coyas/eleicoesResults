import React from 'react';
import {Pie} from 'react-chartjs-2';

export default (props) => (
    
	<div className="container mt-5 ">
        {/* {dados &&
            dados.map((value, index) => (
            <>
            <p>{value}:{index}</p>
            </>
            ))}; */}
                <div className="row">
                    <div className="col-md-12 text-center border-bottom">
                        <h1>{props.dados.desc_circulo}</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h2>Camara municipal</h2>
                        <Pie data={props.dados.data}
                            width={200}
                            height={200}/>
                        
                    </div>
                    
                    {/* <div className="col-md-6">
                        <h2>AM</h2>
                        <Pie data={props.dados.data}
                            width={200}
                            height={200}/>
                    </div> */}
                </div>
            
	</div>
);