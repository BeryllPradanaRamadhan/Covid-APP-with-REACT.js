function DataProvinces(props){
    const {dt_provinsi, nomer} = props;

    return(
        <tr>
            <td>{nomer}</td>
            <td>{dt_provinsi.name}</td>
            <td>{dt_provinsi.numbers.confirmed.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.numbers.recovered.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.numbers.treatment.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.numbers.death.toLocaleString("id-ID")}</td>
        </tr>
    )
}

export default DataProvinces;