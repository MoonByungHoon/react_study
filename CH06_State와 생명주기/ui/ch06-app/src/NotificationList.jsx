import React, { Component } from 'react'
import Notification from './Notification';

const reservedNotifications = [
  {id:1, header:'알림', message:'안녕하세요? 오늘 일정을 알려드립니다.', type:'success'},
  {id:2, header:'공지', message:'금일 낮 2시 반 전체회의 예정입니다.', type:'info'},
  {id:3, header:'노티', message:'이제 곧 미팅이 시작됩니다.', type:'danger'},
  {id:4, header:'안내', message:'안녕? 오늘 일정을 알려드립니다.', type:'success'},
  {id:5, header:'공지', message:'낮 2시 반 전체회의 예정입니다.', type:'info'},
  {id:6, header:'알림', message:'곧 미팅이 시작됩니다.', type:'danger'},
  {id:7, header:'알림', message:'안녕하세? 오늘 일정을 알려드립니다.', type:'success'},
  {id:8, header:'공지', message:'2시 반 전체회의 예정입니다.', type:'info'},
  {id:9, header:'알림', message:'이제  미팅이 시작됩니다.', type:'danger'}
];

let timer;

export default class NotificationList extends Component {

  constructor(props){
    super(props);

    //stats 선언 및 초기화
    this.state = {
      notification : [],
    }
  }

  // 클래스 컴포넌트 생명주기 함수
  componentDidMount(){
    const notis = [];

    timer = setInterval(()=>{
      if(notis.length < reservedNotifications.length){
        //index 0 ~ 8
        const index = notis.length;

        //notis 오브젝트 추가
        notis.push(reservedNotifications[index]);

        // 추가된 오브젝트를 담고 있는 notifications 리스트가 업데이트
        this.setState(
          {
            notification : notis
          }
        );
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <>
        {
          this.state.notification.map((obj, idx) => {
            return <Notification key={idx} id={obj.id} header={obj.header} message={obj.message} />
          })
        }
      </>
    )
  }
}