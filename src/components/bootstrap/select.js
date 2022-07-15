import Form from 'react-bootstrap/Form';

export default function Select({options}){
    const list = options.map( (currentValue, index) => (
        <>
        <option value={currentValue} key={index}>{currentValue}</option>
        </>
    ))
    return(
        <>
        <Form.Select aria-label="Default select example">
            {list}
        </Form.Select>
        </>
    )
}