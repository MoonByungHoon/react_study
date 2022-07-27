import React from 'react'
import { useEffect } from 'react'

function Timer() {
  useEffect(() => {
    const updateTimer = setInterval(() => {
      console.log('⏰');
    }, 1000);

    // 마운트 해제 될 시에 실행 정지
    return () => {
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔 확인하세요!</span>
    </div>
  )
}

export default Timer