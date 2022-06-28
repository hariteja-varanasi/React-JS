import React from 'react';

let x = true;
let y = 1245;

let title = "Welcome to local variable";

let names = ['name one', 'name two', 'name three', 'name four', 'name five', 'name six'];

let data =[
    {
        "title": "HTML",
        "duration": "1 month"
    },
    {
        "title": "React",
        "duration": "1.3 month"
    },
    {
        "title": "Angular",
        "duration": "1.4 month"
    }
]

const ExampleSix = (props) => {
    return (
        <div className="lead border p-3 my-3">
            <h1 className="display-3">Variable in function expression component</h1>
            <p className="fs-1">x = {x ? "say true" : "say false"}</p>
            <p className="fs-1">y = {y}</p>
            <p className="fs-1">{title}</p>
            <hr />
            <ol className="list-group">
                {
                    names.map((item, index) => {
                        return (
                            <li key={index} className={index == 0 ? 'fs-1 list-group-item active' : 'fs-1 list-group-item'}>{index} : {item}</li>
                        )
                    })
                }
            </ol>
            <hr />
            <div className="lead border p-3 my-3">
                {
                    data.map((item, index) => {
                            return (
                                <article key={index}>
                                    <h4 className="display-4">{item.title}</h4>
                                    <p className="fs-1 offset-1">{item.duration}</p>
                                </article>
                            )
                        }

                    )
                }
            </div>
        </div>
    )
}

export default ExampleSix;