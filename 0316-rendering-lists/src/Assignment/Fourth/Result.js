
export default function Result ({datas}) {
    return (
        <div className="Result">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                        {datas.map((value) => (
                        <tr key={value.key}>
                            <td>{value.key}</td>
                            <td>{value.name}</td> 
                            <td>{value.title}</td> 
                        </tr>
                        ))}
                </tbody>
            </table>
            <br/>
            <div className="SearchResult">
                {/* 검색 결과 출력 창*/}
                <h1>결과</h1>
            </div>
        </div>
    )
}