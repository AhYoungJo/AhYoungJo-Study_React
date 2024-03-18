
export default function Result ({datas}) {
    return (
        <div className="Result">
            <ol>
            {datas.map((value) => (
                <li key={value.key}>{value.name}: {value.email}</li>
            ))}
            </ol>
        </div>
    )
}