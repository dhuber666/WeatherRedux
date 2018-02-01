import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';
import _ from 'lodash';


export default function chart(props) {


    return (
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines> 
            <p> Average: { _.round(_.sum(props.data) / props.data.length - 273.15)  } </p>
        </div>
    )
}