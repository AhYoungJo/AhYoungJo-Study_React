import useToggle from "./useToggle";

export default function Faq() {
    // setIsFaqOpen에 toggleValue함수가 내장되어 있음
    // isFaqOpen에는 value값이 들어 있음.
    const [isFaqOpen, setIsFaqOpen] = useToggle();

    const FaqBox = [
        { 
            question: "질문1",
            answer: "답1",
        },
        { 
            question: "질문2",
            answer: "답2",
        },
        { 
            question: "질문3",
            answer: "답3",
        },
    ]

    return(
        <div>
            <h1>custom hook {useToggle} ex</h1>
            {FaqBox.map((faq) => (
                <ul key={faq.question}>
                    <div onClick={setIsFaqOpen} style={{cursor: 'pointer'}}>{faq.question}</div>
                    {/**ref나 className 또는 key값으로 해결할 수 있는 방법 없나 */}
                    {isFaqOpen && <div>{faq.answer}</div>}
                </ul>
            ))}
        </div>
    )
}

