import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

const KelolaDataTenan = () => {
  const [dataTenan, setDataTenan] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/tenans')
      .then((response) => {
        console.log(response.data)
        setDataTenan(response.data)
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
            <CCardHeader>Data Tenan</CCardHeader>
            <CCardBody>
              <CTable striped bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Kode Tenan</CTableHeaderCell>
                    <CTableHeaderCell>Nama Tenan</CTableHeaderCell>
                    <CTableHeaderCell>HP</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataTenan.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="text-center">
                        Tidak ada data.
                      </td>
                    </tr>
                  ) : (
                    dataTenan.map((tenan, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{tenan.KodeTenan}</CTableDataCell>
                        <CTableDataCell>{tenan.NamaTenan}</CTableDataCell>
                        <CTableDataCell>{tenan.HP}</CTableDataCell>
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

export default KelolaDataTenan
