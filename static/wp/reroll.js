import React from 'react';
import Button from 'react-bootstrap/Button';

function Reroll(props) {
     const handleClick = (e) => {
       e.preventDefault();
       props.fetchWeather(props.zipcode)

     };
    return (

            <Button class="btn mr-3" onClick={e => { handleClick(e) }}>
            New Mix
            </Button>

    )
}


{/* <div style={{ display: "flex" }}>
<Button style={{ marginRight: "auto" }} onClick={e => { handleClick(e) }}>
New Mix
</Button>
</div> */}
export default Reroll;
