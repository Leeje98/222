import React from "react";               // 언제나 리액트 파일은 첫번째로 임포트 시켜놓기

function Welcome(props) {
    return (
        <h1>hello, {props.title}~~</h1>
    )
}

export default Welcome              // 파일을 만들고서 끝이 아니라, 만들어져 있는 파일을 꼭 내보내야 한다!
                                         // ㄴ- 그래야 다른 파일에서 이파일의 존재를 인식함