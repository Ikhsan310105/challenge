import React, { useState } from 'react'
import Swal from 'sweetalert2'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FormTransaksi = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    NamaBarang: '',
    Satuan: '',
    HargaSatuan: '',
    Stok: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post('http://localhost:8000/api/barangs', formData)
      Swal.fire({
        title: 'Berhasil',
        text: 'Data Barang berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/barang'
          console.log('Barang created successfully:', response.data)
        }
      })
    } catch (error) {
      console.error('Error creating Barang:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <CCard>
        <CForm onSubmit={handleSubmit}>
          <CCardHeader>Form Tambah Barang</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="NamaBarang"
                    placeholder="Nama Barang"
                    floatingLabel="Nama Barang"
                    value={formData.NamaBarang}
                    required
                    onChange={handleInputChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="Satuan"
                    placeholder="Satuan"
                    floatingLabel="Satuan"
                    value={formData.Satuan}
                    required
                    onChange={handleInputChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="HargaSatuan"
                    placeholder="Harga Satuan"
                    floatingLabel="Harga Satuan"
                    value={formData.HargaSatuan}
                    required
                    onChange={handleInputChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="Stok"
                    placeholder="Stok"
                    floatingLabel="Stok"
                    value={formData.Stok}
                    required
                    onChange={handleInputChange}
                  />
                </CInputGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow>
              <CCol md={1}>
                <Link to={`/barang`}>
                  <CButton color="danger" variant="outline" className="ms-2" title="Back">
                    Back
                  </CButton>
                </Link>
              </CCol>
              <CCol xs={1}>
                {loading ? (
                  <CButton color="primary" variant="outline" type="submit" disabled>
                    <CSpinner color="info" size="sm" />
                  </CButton>
                ) : (
                  <CButton color="primary" variant="outline" type="submit">
                    Submit
                  </CButton>
                )}
              </CCol>
            </CRow>
          </CCardFooter>
        </CForm>
      </CCard>
    </>
  )
}

export default FormTransaksi
