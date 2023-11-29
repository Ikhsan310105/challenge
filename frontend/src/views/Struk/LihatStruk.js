import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const KelolaDataNota = () => {
  const [dataNota, setDataNota] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/notas')
      .then((response) => {
        console.log(response.data)
        setDataNota(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Data Nota</CCardHeader>
            <CCardBody>
              <CTable striped bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Kode Nota</CTableHeaderCell>
                    <CTableHeaderCell>Kode Tenan</CTableHeaderCell>
                    <CTableHeaderCell>Kode Kasir</CTableHeaderCell>
                    <CTableHeaderCell>Tanggal Nota</CTableHeaderCell>
                    <CTableHeaderCell>Jam Nota</CTableHeaderCell>
                    <CTableHeaderCell>Jumlah Belanja</CTableHeaderCell>
                    <CTableHeaderCell>Diskon</CTableHeaderCell>
                    <CTableHeaderCell>Total</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataNota.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center">
                        Tidak ada data.
                      </td>
                    </tr>
                  ) : (
                    dataNota.map((nota, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{nota.KodeNota}</CTableDataCell>
                        <CTableDataCell>{nota.KodeTenan}</CTableDataCell>
                        <CTableDataCell>{nota.KodeKasir}</CTableDataCell>
                        <CTableDataCell>{nota.TglNota}</CTableDataCell>
                        <CTableDataCell>{nota.JamNota}</CTableDataCell>
                        <CTableDataCell>{nota.JumlahBelanja}</CTableDataCell>
                        <CTableDataCell>{nota.Diskon}</CTableDataCell>
                        <CTableDataCell>{nota.Total}</CTableDataCell>
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default KelolaDataNota
