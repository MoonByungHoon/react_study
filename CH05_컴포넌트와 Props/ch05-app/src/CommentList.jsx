import React from 'react'
import Comment from './Comment';

const list = [{
  name: 'Ken',
  comment: '안녕하세요? 루니입니다.',
  avartaUrl: './images/KakaoTalk_20220713_193816695.png'
}, {
  name: 'Jay',
  comment: '안녕하세요.',
  avartaUrl: './images/KakaoTalk_20220713_193816695.png'
}, {
  name: 'Joy',
  comment: '하이룽',
  avartaUrl: './images/KakaoTalk_20220713_193816695.png'
}, {
  name: 'Jone',
  comment: '방가',
  avartaUrl: './images/KakaoTalk_20220713_193816695.png'
}
];

function CommentList(props) {
  return (
    <>
      {
        list.map((data, idx) => {

          return (
            <Comment name={data.name} comment={data.comment} avartaUrl={data.avartaUrl} />
          )
        })
      }
    </>
  )
}

export default CommentList