import React from "react";               // 언제나 리액트 파일은 첫번째로 임포트 시켜놓기
import Welcome from "./Welcome";         // 다음으로 리스트가 첨가될 내가 만든파일 임포트 시키기

function WelcomeList(props) {
    return (
        <>
            <Welcome title='React' />
            <Welcome title='JavaScript' />
        </>
    )
}

export default WelcomeList               // 파일을 만들고서 끝이 아니라, 만들어져 있는 파일을 꼭 내보내야 한다!
                                         // ㄴ- 그래야 다른 파일에서 이파일의 존재를 인식함