export default function ListComp({list}) {
    return (
        <div>
            {
                list.map(item => {
                    return (
                        <li>I am {item}</li>
                    );
                })
            }
        </div>
    );
}