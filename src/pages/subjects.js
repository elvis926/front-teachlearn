import React from 'react'

const comments = ({comments}) => {

    return (
      <div>
          {comments.map((comments)=><li>{comments.text}</li>)}
      </div>
    );
};

export default comments;

export async function getStaticProps (){

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`
    );
    const data = await res.json();
    console.log('data',data);

    const comments = data.data;

    return {
        props:{
            comments,
        },
    };
}