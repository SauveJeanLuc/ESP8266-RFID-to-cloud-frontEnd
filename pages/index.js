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
                    <th scope="col" className={styles.th}>Card ID</th>
                    <th scope="col" className={styles.th}>Card owner Name</th>
                    <th scope="col" className={styles.th}>Initial Balance</th>
                    <th scope="col" className={styles.th}>New Balance</th>
                    <th scope="col" className={styles.th}>Transport Fare</th>
                    {/* <th scope="col" className={styles.th}>WHEN</th>
                    <th scope="col" className={styles.th}>WHEN</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    rowsData.map((data, index) => {
                        return (
                            <tr key={data._id}>
                                <td className={styles.td}>{data.Id}</td>
                                <td className={styles.td}>{data.cardOwnerName}</td>
                                <td className={styles.td}>{data.initialBalance}</td>
                                <td className={styles.td}>{data.newBalance}</td>
                                <td className={styles.td}>{data.transportFare}</td>
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
       const getTransactions =  () =>{ 
            CardService.getAll().then(res =>{setCards(res.data);}).catch(e=>console.log(e))
       }
      let timer = setInterval(()=>{getTransactions(), 1000})

       return ()=>{
        clearInterval(timer)
       }
    },[])
    
    return (
        <GrowableTable Table={Table} items={cards} initialItemsLen={4} />
    )
}


export default Container;