import React from 'react'
import {api} from "../lib/api";

const subjects = ({subjects}) => {

    return (
      <div>
          {subjects.map((subjects)=><li>{subjects.name}</li>)}
      </div>
    );
};

export default subjects;

export async function getStaticProps (){

    const res = await api.get(`/subjects` );
    const data = await res.json();
    console.log('data',data);
    const subjects = data.data;

    return {
        props:{
            subjects,
        },
    };
}