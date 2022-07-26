import React from 'react'
import { useMemo } from 'react'

// Memoization(컴퓨터 최적화를 위해서 사용하는 개념)
// 이슈 :동일한 처리를 하는 함수를 반복적으로 호출해야할 때
// 맨 처음 값을 계산할 때 해당 값을 메모리에 저장해서
// 필요할 때마다 중복 연산 없이 메모리를 참조하여 재사용하는 기법

// useMemo(콜백함수, 의존성 배열[count]);
// (연산량 많은 함수의 결과값을 저장해 두었다가
// 재호출 시에 이전 결과값을 바로 반환)

function UseMemo01() {

  
  return (
    <div>UseMemo01</div>
  )
}

export default UseMemo01