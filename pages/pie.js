import React from 'react';
import {Pie} from 'react-chartjs-2';

export default (props) => (
	<div className="container">
		<div className="row">
            <h2>{props.lugar}</h2>
            <div className="col-md-6">
                <h2>CM</h2>
                <Pie data={props.dados}
                    width={200}
                    height={200}/>
            </div>
            
            <div className="col-md-6">
                <h2>AM</h2>
                <Pie data={props.dados}
                    width={200}
                    height={200}/>
            </div>
        </div>
	</div>
);