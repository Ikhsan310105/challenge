import React, { useState, useEffect } from 'react'
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

const FormEditBarang = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    NamaBarang: '',
    Satuan: '',
    HargaSatuan: '',
    Stok: '',
  })

  useEffect(() => {
    const dataBarang = JSON.parse(localStorage.getItem('DataBarang'))
    setFormData({
      NamaBarang: dataBarang.NamaBarang,
      Satuan: dataBarang.Satuan,
      HargaSatuan: dataBarang.HargaSatuan,
      Stok: dataBarang.Stok,
    })
  }, [])

  const handleNamaBarangChange = (e) => {
    const inputValue = e.target.value
    setFormData({ ...formData, NamaBarang: inputValue })
  }

  const handleSatuanChange = (e) => {
    const inputValue = e.target.value
    setFormData({ ...formData, Satuan: inputValue })
  }

  const handleHargaSatuanChange = (e) => {
    const inputValue = e.target.value
    setFormData({ ...formData, HargaSatuan: inputValue })
  }

  const handleStokChange = (e) => {
    const inputValue = e.target.value
    setFormData({ ...formData, Stok: inputValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const newBarang = {
      NamaBarang: formData.NamaBarang,
      Satuan: formData.Satuan,
      HargaSatuan: formData.HargaSatuan,
      Stok: formData.Stok,
    }

    try {
      const response = await axios.post('http://localhost:8000/api/barangs', newBarang)
      Swal.fire({
        title: 'Berhasil',
        text: `Data Barang berhasil ditambahkan.`,
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
                    defaultValue={formData.NamaBarang}
                    required
                    onChange={handleNamaBarangChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="Satuan"
                    placeholder="Satuan"
                    floatingLabel="Satuan"
                    defaultValue={formData.Satuan}
                    required
                    onChange={handleSatuanChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="HargaSatuan"
                    placeholder="Harga Satuan"
                    floatingLabel="Harga Satuan"
                    defaultValue={formData.HargaSatuan}
                    required
                    onChange={handleHargaSatuanChange}
                  />
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name="Stok"
                    placeholder="Stok"
                    floatingLabel="Stok"
                    defaultValue={formData.Stok}
                    required
                    onChange={handleStokChange}
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

export default FormEditBarang
