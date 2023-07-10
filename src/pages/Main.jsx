import React from 'react';

const Main = () => {
    return (
        <div className='main_container'>
            <div className='main_explain'>
                <h1>뉴스 기반 주식 종목 추천</h1>
                <span className="explain">
                    사람은 만나본 적 없는 사람과 처음 들어보는 기업도 이름만으로 구분할 수 있습니다.<br/>
                    과일 Apple과 미국 기업 Apple을 구분하는 것 처럼 뜻은 다르지만 같은 단어를 구분할 수 있습니다. <br/>
                    뉴스에서 기업의 이름이 새로 생기거나, 일부만 인용되면 판단할 수 없었던<br/>
                    기존의 검색엔진 기술과 일반 자연어 인공지능의 한계를 극복하였습니다.<br/>
                    실제로 사용할만한 뉴스 서비스를 제공하기 위해서는 뉴스가 무엇에 관한 것인지를 정확히 알수 있는 기술이 필요합니다.<br/>
                </span>
            </div>

            <div className="strengthContainer">
                <div style={{backgroundColor: '#f7f9fb'}}>
                    <div className="strength" >
                        <div className="card">
                            <p>기술 강점 1.</p>
                            <p>기존의 뉴스 종목 배정<br/> 문제점 개선</p>
                            <span className="explain">
                                기존 포털사이트는 뉴스를 관련한 종목에 배정하는 기준으로<br/>
                                ‘티커’를 사용합니다.<br/>
                                이는 텍스트 기반의 분류로 많은 오류를 유저에게 범합니다.<br/>
                                뉴스 본문 내 등장한 종목명을 통한 배정으로 타종목에 뉴스가 배정되거나,<br/>
                                비상장사에 관련된 뉴스는 찾기 어렵습니다.<br/>
                            </span>
                        </div>
                        <div className="card">
                            <p>기술 강점 2.</p>
                            <p>동음이의어가 같이 검색되는<br/> 문제점 개선</p>
                            <span className="explain">
                                기존 포털사이트는 유저가 검색한 키워드를 중심으로 결과가 노출되기 때문에<br/>
                                동음이의어가 같이 검색되는 불편함이 있습니다.<br/>
                                특히, 종목명과 동일한 단어가 타 기사에 포함된 경우도 함께 검색되기 때문에<br/>
                                유저는 관심있는 종목과 관련된 뉴스만 확인하는데<br/>
                                많은 시간이 소요됩니다.<br/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;