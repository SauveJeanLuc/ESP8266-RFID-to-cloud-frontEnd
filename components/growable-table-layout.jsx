import { useState } from "react"

const GrowableTable = ({ Table, items, initialItemsLen ,FILTER}) => {

    const [data, setData] = useState({
        items: items,
        showItems: initialItemsLen
    })


    function handleShowMore() {
        setData({ ...data, showItems: data.showItems >= data.items.length ? initialItemsLen : data.showItems + 2 })
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Table rowsData={items} FILTER={FILTER} />
                </div>
            </div>
            <div className="row justify-content-center">
                {/* <div className="col-4">
                    <button type="button" style={styles.button} className="btn btn-outline-danger" onClick={() => handleShowMore()}>{data.showItems >= data.items.length ? "Show Less" : "Show More"}</button>
                </div> */}
            </div>
        </div>
    )
}
const styles={
    button:{
        fontSize:"0.85em"
    }
}

export default GrowableTable;