import React from 'react';
import { useEffect, useState } from 'react';
import styles from "../styles/pages/table.module.css";
import GrowableTable from "../components/growable-table-layout"
import CardService from "../services/card.service"

const Table = ({ rowsData }) => {

    return (
        <table className={'table border  rounded ' + styles.table} style={{ fontSize: '0.8em' }}>
            <thead>
                <tr>
                    <th scope="col" className={styles.th}>#</th>
                    <th scope="col" className={styles.th}>CUSTOMER</th>
                    <th scope="col" className={styles.th}>CARD ID</th>
                    <th scope="col" className={styles.th}>BALANCE</th>
          
                </tr>
            </thead>
            <tbody>
                {
                    rowsData.map((data, index) => {
                        return (
                            <tr key={data.USER_ID}>
                                <td className={styles.td}>{index + 1}</td>
                                <td className={styles.td}>{data.customer}</td>
                                <td className={styles.td}>{data.card_id}</td>
                                <td className={styles.td}>{data.balance}</td>
                            </tr>)
                    })
                }
            </tbody>
        </table>
    )
}


const Container = () => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        CardService.getAll()
        .then(res =>setCards(res.data)).catch(e=>console.log(e))
    },[])
    
    return (
        <GrowableTable Table={Table} items={cards} initialItemsLen={4} />
    )
}


export default Container;