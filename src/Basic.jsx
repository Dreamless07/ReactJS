const NestedComp=()=>{ {/*lambda function/component NestedComp which is called by NewComp*/}
        return(
                <div>
                    <h2>This is a nested Component</h2>
                    </div>

               )
    }

function NewComp(){{/*A component/function*/}
    return (
        <div>{/*parent*/}
            <h1>Hello this is the basic React tutorial</h1>{/*child*/}
            <NestedComp/> {/*This is a nested component inside NewComp*/}
        </div>
        );
   }

export default NewComp;{/*Export NewComp to App.js*/}