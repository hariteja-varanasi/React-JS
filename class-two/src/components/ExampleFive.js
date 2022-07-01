import React, {useState} from 'react';

function ExampleFive(props) {

    const [qty, setQty] = useState(0);

    const inc = () => {
       qty < 10 ? setQty(qty + 1) : setQty(10);
    }

    const dec = () => {
        qty > 0 ? setQty(qty - 1) : setQty(0);
    }

    return (
        <div className="lead border border-dark bg-warning p-3 m-3">
            <h3 className="display-3 text-capitalize">change quantity value</h3>
            {/*<form>*/}
            {/*    <div className="input-group justify-content-center">*/}
            {/*        <label htmlFor="qty" className="fs-1 m-3 p-3">Quantity</label>*/}
            {/*        <input id="qty" name="qty" type="number" className="form-control-color w-25 h-25 fs-1 m-3" min={0} max={10} value={qty}*/}
            {/*               onChange={(e) =>*/}
            {/*                   setQty(e.target.value)*/}
            {/*               } />*/}
            {/*    </div>*/}
            {/*    <p className="fs-1 m-3 p-3">Quantity is : {qty}</p>*/}
            {/*</form>*/}

            <hr />

            <form>
                <center>
                    <div className="input-group w-25 border border-dark">
                        <label htmlFor="qty" className="fs-2 m-3 p-3">Change Quantity Here</label>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-danger btn-number fs-2" onClick={dec}>
                              -
                            </button>
                        </span>
                        <input type="text" readOnly id="quantity" name="quantity" className="form-control fs-2 text-center" value={qty}
                               min={0} max={10} />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-success btn-number fs-2" onClick={inc}>
                                +
                            </button>
                        </span>
                    </div>
                </center>

                <p className="fs-1 m-3 p-3">Quantity is : {qty}</p>
            </form>

        </div>
    );
}

export default ExampleFive;