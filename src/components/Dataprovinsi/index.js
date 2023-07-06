function Dataprovinsi(props){
    const {dt_provinsi, nomer} = props;

    return(
        <tr>
            <td>{nomer}</td>
            <td>{dt_provinsi.kota}</td>
            <td>{dt_provinsi.kasus.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.sembuh.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.dirawat.toLocaleString("id-ID")}</td>
            <td>{dt_provinsi.meninggal.toLocaleString("id-ID")}</td>
        </tr>
    )
}

export default Dataprovinsi;