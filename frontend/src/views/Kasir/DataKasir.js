import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {
  CButton,
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
  CForm,
  CFormInput,
  CInputGroup,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash, cilUserPlus } from '@coreui/icons'
import { Link } from 'react-router-dom'

const KelolaDataKasir = () => {
  const [dataKasir, setDataKasir] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/kasirs') // Update the API endpoint for Kasirs
      .then((response) => {
        console.log(response.data)
        setDataKasir(response.data)
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
            <CCardHeader>Data Kasir</CCardHeader>
            <CCardBody>
              <CForm className="mb-3">
                <CRow></CRow>
              </CForm>
              <CTable striped bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Kode Kasir</CTableHeaderCell>
                    <CTableHeaderCell>Nama</CTableHeaderCell>
                    <CTableHeaderCell>HP</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataKasir.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center">
                        Tidak ada data.
                      </td>
                    </tr>
                  ) : (
                    dataKasir.map((kasir, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{kasir.KodeKasir}</CTableDataCell>
                        <CTableDataCell>{kasir.Nama}</CTableDataCell>
                        <CTableDataCell>{kasir.HP}</CTableDataCell>
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

export default KelolaDataKasir
